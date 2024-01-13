const express = require("express")
const mysql = require("mysql")
var cors = require('cors')
require('dotenv').config()
const _ =require('underscore');
const app = express()


const syncSql = require('sync-sql');

const config = {
	host: "127.0.0.1",
	password: `${process.env.MYSQL_PW}`,
	user: "root",
	database: "RANKERS",
	multipleStatements: true
  }


app.use(express.json())
app.use(cors());
// console.log(process.env.MYSQL_PW)

// const db = mysql.createConnection({
//   host: "127.0.0.1",
//   password: `${process.env.MYSQL_PW}`,
//   user: "root",
//   database: "RANKERS",
//   multipleStatements: true
// })

const db = mysql.createConnection(config)

db.connect(err => {
  if (err) throw err;
})

app.post('/matchqueue', (req,res) => {
	const sql = "INSERT INTO matchday" + req.body.matchDayIdx + " (`email`,`time`,`date`,`user_id`,`rating`) VALUES (?,(SELECT user_id FROM user_stats WHERE `email`='" + req.body.email + "'),(SELECT rating FROM user_stats WHERE `email`='" + req.body.email + "'))"
	const values = [
		req.body.email,
		req.body.matchTime,
		req.body.matchDate
	]
	db.query(sql,[values],(err,data)=>{
		if(err){
			console.log("matchqueueerr : ",err)
			return res.json(err)
		}
		// console.log("hello")
		return res.json("Success")
	})
})

app.get('/queueinfo', (req,res)=>{
	const email = req.query.email;
	// console.log("req.query", req.query)
	const sql = "SELECT * FROM matchday0 WHERE `email`='" + email + "' UNION SELECT * FROM matchday1 WHERE `email`='" + email + "' UNION SELECT * FROM matchday2 WHERE `email`='" + email + "' UNION SELECT * FROM matchday3 WHERE `email`='" + email + "' UNION SELECT * FROM matchday4 WHERE `email`='" + email + "' UNION SELECT * FROM matchday5 WHERE `email`='" + email + "' UNION SELECT * FROM matchday6 WHERE `email`='" + email + "' ORDER BY date, time";
	db.query(sql, (err, data)=> {
		if(err) return res.json(err);
		return res.json(data);
	})
})

app.get('/matchinfo', (req,res)=>{
	const email = req.query.email;
	// console.log("req.query", req.query)
	const sql = "SELECT * FROM matches";
	db.query(sql, (err, data)=> {
		if(err) return res.json(err);
		return res.json(data);
	})
})

app.get('/stats', (req,res)=>{
	const email = req.query.email;
	// console.log("stats-server",req.query);
	const sql = "SELECT * FROM user_stats WHERE `email`= '" + email + "'";
	db.query(sql, (err, data)=> {
		if(err) return res.json(err);
		return res.json(data);
	})
})

app.get('/leaderboard', (req,res)=>{
	const sql = "SELECT * FROM user_stats ORDER BY rating DESC"
	db.query(sql, (err, data)=> {
		if(err) return res.json(err);
		return res.json(data);
	})
})

var user1=[];
var user2=[];
var date;
var time;
const matchtimes = ['10:00', '15:00']
//search 5 emails with lowest rating => choose random 2 emails and put them in matches => remove the 2 emails from matchday
app.post('/buildmatch', (req,res)=> {
	const rd_day_idx = Math.floor(Math.random() * 7);
	const rd_time_idx = Math.floor(Math.random() * 2);
	const sql = "SELECT * FROM matchday" + rd_day_idx + " WHERE `time` ='" + matchtimes[rd_time_idx] + "' ORDER BY rating LIMIT 5";	
	var output = syncSql.mysql(config, sql)
	// console.log("output.success",output.success)
	// console.log("output.data.rows.length",output.data.rows.length)

	// console.log("1",output.data.rows[1])
	if(output.success && output.data.rows.length >= 2)
	{
		const shuffledArr = _.shuffle(output.data.rows)
		user1 = shuffledArr[0]
		user2 = shuffledArr[1]
		date = user1.date;
		// console.log("user1_id", user1.id)
		if(date)
		{date = JSON.stringify(date).split('T')[0]+`"`}
		time = user1.time;
		console.log("buildmatch first process succeeded from matchday"+rd_day_idx)
	} else if (output.success && output.data.rows.length < 2) {
		return console.log("fewer than 2 users in matchday" + rd_day_idx + ", " +matchtimes[rd_time_idx])
	} else{
		return console.log("buildmatch first step failed at matchday" + rd_day_idx + ", " + matchtimes[rd_time_idx], output)
	}

	const sql2 = "INSERT INTO matches (`uuid`,`user1_id`,`user1_email`,`user1_rating`,`user2_id`,`user2_email`,`user2_rating`,`date`,`time`) VALUES (uuid()," + user1.id + ",'" + user1.email + "'," + user1.rating + "," + user2.id + ",'" + user2.email + "'," + user2.rating + "," + date + ",'" + time +  "')"

	db.query(sql2, (err,data) =>{
		if(err) return console.log("buildmatch-sql2 error: ",err)
		console.log("matchmaking success")
	})

	const sql3 = "DELETE FROM matchday"+ rd_day_idx + " WHERE `email`='" + user1.email + "' OR `email`='" + user2.email + "' AND `time`='10:00'";
	db.query(sql3, (err,data) => {
		if(err) return res.json(err)
		return res.json("whole buildmatch process successful");
	})
})

app.post('/insertresult', (req,res)=>{
	const inputEmail = req.body.params.inputEmail;
	const user1scores = req.body.params.user1_score;
	const user2scores = req.body.params.user2_score;
	const user1_email = req.body.params.user1_email;
	const user2_email = req.body.params.user2_email;
	const date = req.body.params.date;
	const time = req.body.params.time;

	var roundscore1 = 0;
	var roundscore2 = 0;
	var winner_email = "";
	var loser_email = "";

	for (let i = 0; i < 3; i++){
		// console.log(i)
		if(parseInt(user1scores[i]) > parseInt(user2scores[i])){
			roundscore1++;
		} else {
			roundscore2++;
		}
	}

	if(roundscore1 > roundscore2){
		winner_email = user1_email;
		winner_scores = user1scores;
		loser_email = user2_email
		loser_scores = user2scores;

	} else {
		winner_email = user2_email;
		winner_scores = user2scores;
		loser_email = user1_email
		loser_scores = user1scores;
	}
	
	// console.log("user_scores",user1scores, user2scores)
	// console.log("round_score", roundscore1,roundscore2)
	// console.log("winner_email,loser_email", winner_email, loser_email)
	sql = "INSERT INTO results (`uuid`,`input_user_email`,`winner_id`,`winner_email`,`winner_score1`,`winner_score2`,`winner_score3`,`loser_id`,`loser_email`,`loser_score1`,`loser_score2`,`loser_score3`,`date`,`time`) VALUES (uuid(),'" + inputEmail +"', (SELECT user_id FROM user_stats WHERE `email`='" + winner_email + "'),'"+ winner_email +"'," + winner_scores[0] + "," + winner_scores[1] + "," + winner_scores[2] + ", (SELECT user_id FROM user_stats WHERE `email`='" + loser_email +  "'),'" + loser_email + "'," + loser_scores[0] + "," + loser_scores[1] + "," + loser_scores[2] + ",'" + date + "','" + time + "')"

	// (SELECT user_id FROM user_stats WHERE `email`='" + req.body.email + "'),(SELECT rating FROM user_stats WHERE `email`='" + req.body.email + "'))"

	db.query(sql, (err,data) => {
		if(err) return res.json(err)
		console.log("INSERT RESULT DONE")
		return res.json(data);
	})
})

app.get("/checkresult", (req,res)=>{
	const date = req.query.date.split('T')[0];
	const time = req.query.time;
	const email = req.query.email;
	// console.log(date, time, email)
	sql2 = "SELECT * FROM results WHERE `date`='" + date + "' AND `time` ='" + time + "' AND `input_user_email`='" + email + "'";
	// sql2 = "SELECT * FROM results WHERE `date`='" + date + "' AND `time` ='" + time + "'";
	db.query(sql2, (err,data) => {
	if(err) return res.json(err)
		return res.json(data)
	})
})

//check the scores from two players are the same
app.get("/resultprocess", (req,res)=>{
	const date = req.query.date;
	const time = req.query.time;
	// console.log("resultprocessreq: ",req)
	console.log("date,time", date, time)
	sql = "SELECT * FROM results WHERE `date`='" + date + "' AND `time` ='" + time + "'";
	var output = syncSql.mysql(config, sql)
	// console.log("syncSql",output.data.rows.length)
	const row0 = output.data.rows[0]
	const row1 = output.data.rows[1]

	if(output.data.rows.length < 2)
		return res.json("waitForOpponent")
	else if(output.data.rows.length > 2)
		return res.json("tooManyResults")
	else {
		if(row0.winner_score1 === row1.winner_score1 &&
		   row0.winner_score2 === row1.winner_score2 &&
		   row0.winner_score3 === row1.winner_score3 &&
		   row0.loser_score1 === row1.loser_score1 &&
		   row0.loser_score2 === row1.loser_score2 &&  
		   row0.loser_score3 === row1.loser_score3
		   ){
			//POINTS DIFFERENCE
			var ptsDiff = Math.abs(parseInt(row0.winner_score1) - parseInt(row0.loser_score1)) + Math.abs(parseInt(row0.winner_score2) - parseInt(row0.loser_score2)) + Math.abs(parseInt(row0.winner_score3) - parseInt(row0.loser_score3))
			// console.log("PTSDIFF: ", ptsDiff )

			//RATING DIFFERENCE
			const ratingWinner = syncSql.mysql(config,"SELECT rating FROM user_stats WHERE `email`='" + row0.winner_email + "'").data.rows[0].rating
			const ratingLoser = syncSql.mysql(config,"SELECT rating FROM user_stats WHERE `email`='" + row0.loser_email + "'").data.rows[0].rating
			const ratingDiff = ratingWinner - ratingLoser;

			//RATING CHANGES
			const w_changes = 20 + 6*ptsDiff - Math.floor(0.2*ratingDiff) + Math.floor(30*Math.random())
			const l_changes = 20 + 6*ptsDiff - Math.floor(0.2*ratingDiff) + Math.floor(30*Math.random())
	
			const newRatingWinner = ratingWinner + w_changes;
			const newRatingLoser = ratingLoser - l_changes;
			sqlWinner = "UPDATE user_stats SET `rating`=" + newRatingWinner+",`win`= win + 1 WHERE `email`='" + row0.winner_email + "'"
			sqlLoser = "UPDATE user_stats SET `rating`=" + newRatingLoser+ ", `lose`= lose + 1 WHERE `email`='" + row0.loser_email + "'"
			const outputWinner = syncSql.mysql(config,sqlWinner)
			const outputLoser = syncSql.mysql(config,sqlLoser)
			if(outputWinner.success && outputLoser.success)
				res.json("scoreRight")
			else
				res.json("newRatingInsertFailed")
		   }
		else {
			res.json("scoreDiffrent")
		}
	}
})

app.listen( 8081, () => {
  console.log("Listening to backend on port 8081")
})