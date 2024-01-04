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

app.get('/matchinfo', (req,res)=>{
	const email = req.query.email;
	// console.log("req.query", req.query)
	const sql = "SELECT * FROM matchday0 WHERE `email`='" + email + "' UNION SELECT * FROM matchday1 WHERE `email`='" + email + "' UNION SELECT * FROM matchday2 WHERE `email`='" + email + "' UNION SELECT * FROM matchday3 WHERE `email`='" + email + "' UNION SELECT * FROM matchday4 WHERE `email`='" + email + "' UNION SELECT * FROM matchday5 WHERE `email`='" + email + "' UNION SELECT * FROM matchday6 WHERE `email`='" + email + "' ORDER BY date, time";
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
app.post('/buildmatch', async (req,res)=> {
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
		console.log("user1_id", user1.id)
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
	db.query(sql3, (err,data) =>{
		if(err) return res.json(err)
		return res.json("whole buildmatch process successful");
	})
})

app.listen( 8081, () => {
  console.log("Listening to backend on port 8081")
})