const express = require("express")
const mysql = require("mysql")
var cors = require('cors')
require('dotenv').config()
const _ =require('underscore');
const syncSql = require('sync-sql');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const nodemailer = require('nodemailer')
const jwtSecretKey = `${process.env.JWT_SECRET_KEY}`
const app = express()
app.use(express.urlencoded({ extended: true }));

app.use(express.json())
app.use(cors());

////////
//AUTH//
////////

// LOOK UP THE USER ENTRY IN THE DB IF ACCOUNT IS ALREADY REGISTERED, IF EXISTS, GIVEN PW AND HASED PW WILL BE COMPARED (SIGNUP PAGE), IT NOT IN DB THEN SEND SIGNAL (signup.js, login.js)
app.post("/api/authlogin", (req, res) => {
	const { email, password } = req.body;
	const sql = "SELECT * FROM users WHERE `email` = ?";
	db.query(sql, [email], async (err, data) => {
	  if (err) {
		return res.json(err);
	  }
	  if (data.length > 0) {
		const comparison = await bcrypt.compare(password, data[0].password)
		let loginData = {
		  email,
		  signInTime: Date.now(),
		};
		const token = jwt.sign(loginData, jwtSecretKey);
		if (comparison) {
		  return res.json({ message: 'success', token})
		}
		else {
		  return res.json({ message: 'failed'})
		}
	  //IF NO MATCHING EMAIL FOUND
	  } else {
		return res.json({ message: 'notFoundInDb'})
	  }
	})
})

// CHECKS IF A GIVEN JWT TOKEN IS VALID (App.js)
app.post('/api/verify', (req, res) => {
	const tokenHeaderKey = "jwt-token";
	const authToken = req.headers[tokenHeaderKey];
  
	try {
	  const verified = jwt.verify(authToken, jwtSecretKey);
	  if (verified) {
		return res
		  .status(200)
		  .json({ status: "logged in", message: "success" });
	  } else {
		// Access Denied
		return res.status(401).json({ status: "invalid auth", message: "error" });
	  }
	} catch (error) {
	  // Access Denied
	  return res.status(401).json({ status: "invalid auth", message: "error" });
	}
})

//SEND VERIFICATION EMAIL (signup.js)
var authNumber = '';
app.post('/api/sendverificationemail', (req,res) => {
	authNumber = Math.floor(Math.random() * 888888) + 111111;
	const email = req.body.email;
	const smtpTransport = nodemailer.createTransport({
		service: process.env.SMTP_SERVICE,
		auth:{
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD
		},
		tls:{
			rejectUnauthorized: false,
		}
	})

	const mailOptions = {
		from: 'RANKERS Team',
		to: email, // email address of the user
		subject: '[RANKERS] Verification E-Mail', // subject
		text: `Confirm the information below and finish your verification.\n
		E-Mail trying to sign-up 👉 ${email}\n
		Verification COde 👉 ${authNumber}`, // content of email
	  };

	smtpTransport.sendMail(mailOptions, (error, responses) => {
		if (error) {
		  return res.status(500).json({
			message: `Failed to send authentication email to ${email},${error}`,
		  });
		} else {
		  return res.status(200).json({
			authNumber,
			message: `Authentication mail is sent to ${email}`,
		  });
		}
		smtpTransport.close();
	});
})

//CHECK THE INPUT CODE FROM USER(Signup.js)
app.post('/api/verificationcheck',(req,res) => {
	const codeInput = req.body.codeInput;
	const email = req.body.email;
	const password = req.body.password;
	console.log("authNumber", authNumber, codeInput)
	if(parseInt(codeInput) === authNumber) {
		
		//INSER USER IN DATABASE WHEN VERIFICATION IS DONE

		let loginData = {
			email,
			signInTime: Date.now(),
		  };
		const token = jwt.sign(loginData, jwtSecretKey);

		bcrypt.hash(password, 10, function (_err, hash) {
			console.log("email, hashed pw",{ email, password: hash })
	
			const sql = "INSERT INTO users (`email`, `password`) VALUES (?); INSERT INTO user_stats (`email`,`user_id`) VALUES ('" + req.body.email + "', (SELECT id FROM users WHERE `email`='" + req.body.email+"'))";
			const values = [
			  req.body.email,
			  hash
			]
			db.query(sql, [values], (err, data) => {
			  if (err) {
				console.log("ERROR INSERTING NEW USER IN DB : ", err)
				// return res.json(err)
			  } 
			  console.log("INSERT NEW USER IN DB SUCCEED")
			  // return res.json(data);
			})
			let loginData = {
				email,
				signInTime: Date.now(),
			};
			const token = jwt.sign(loginData, jwtSecretKey);
			return res.status(200).json({ message: "verification successful", token });
		});
		// return res.json("verification successful")
	}else{return res.json("verification failed")}
})
////////////
//AUTH END//
////////////


//SQL CONNECTION
const config = {
	host: "127.0.0.1",
	password: `${process.env.MYSQL_PW}`,
	user: "root",
	database: "RANKERS",
	multipleStatements: true
}

const db = mysql.createConnection(config)

db.connect(err => {
  if (err) throw err;
})


//ADD QUEUE(findmatch.js)
app.post('/api/matchqueue', (req,res) => {
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

//RETURN QUEUE INFO(findmatch.js)
app.get('/api/queueinfo', (req,res)=>{
	const email = req.query.email;
	// console.log("req.query", req.query)
	const sql = "SELECT * FROM matchday0 WHERE `email`='" + email + "' UNION SELECT * FROM matchday1 WHERE `email`='" + email + "' UNION SELECT * FROM matchday2 WHERE `email`='" + email + "' UNION SELECT * FROM matchday3 WHERE `email`='" + email + "' UNION SELECT * FROM matchday4 WHERE `email`='" + email + "' UNION SELECT * FROM matchday5 WHERE `email`='" + email + "' UNION SELECT * FROM matchday6 WHERE `email`='" + email + "' ORDER BY date, time";
	db.query(sql, (err, data)=> {
		if(err) return res.json(err);
		return res.json(data);
	})
})

//RETURN MATCH INFO(findmatch.js)
app.get('/api/matchinfo', (req,res)=>{
	const email = req.query.email;
	// console.log("req.query", req.query)
	const sql = "SELECT * FROM matches";
	db.query(sql, (err, data)=> {
		if(err) return res.json(err);
		return res.json(data);
	})
})

//DELETE QUEUE(findmatch.js)
app.post('/api/deletequeue', (req,res)=>{
	const id = req.body.queueId;
	const dayIdx = req.body.dayIdx;
	const sql = "DELETE FROM matchday"+ dayIdx + " WHERE `id`=" + id;
	db.query(sql, (err, data)=> {
		if(err) return res.json(err);
		return res.json("success");
	})
})

//DELETE MATCH(findmatch.js)
app.post('/api/deletematch', (req,res)=>{
	const id = req.body.matchId;
	const email = req.body.email;

	const sql = "DELETE FROM matches WHERE `uuid`='" + id + "'";
	db.query(sql, (err, data)=> {
		if(err) console.log("DELETE MATCH ERROR: ",err)
		console.log("DELETE MATCH SUCCESSFULL")
	})
	const sql2 = "UPDATE user_stats SET `rating`= rating - 100 WHERE `email` = '" + email+ "'";
	db.query(sql2, (err, data)=> {
		if(err) return res.json(err);
		return res.json("DELETE MATCH, PENALY APPLY SUCCESS");
	})
})

//RETURN LEADERBOARD(leaderboard.js, profile.js)
app.get('/api/leaderboard', (req,res)=>{
	const sql = "SELECT * FROM user_stats ORDER BY rating DESC"
	db.query(sql, (err, data)=> {
		if(err) return res.json(err);
		return res.json(data);
	})
})

//////////////
//BUILDMATCH//
//////////////

var user1=[];
var user2=[];
var date;
var time;
const matchtimes = ['10:00', '15:00']
app.post('/api/buildmatch', (req,res)=> {
	//CHOOSE RANDOM DATE AND TIME AND CHOOSE 5 QUEUES ASCENDING ORDER BY RATING
	const rd_day_idx = Math.floor(Math.random() * 7);
	const rd_time_idx = Math.floor(Math.random() * 2);
	const sql = "SELECT * FROM matchday" + rd_day_idx + " WHERE `time` ='" + matchtimes[rd_time_idx] + "' ORDER BY rating LIMIT 5";	
	var output = syncSql.mysql(config, sql)

	//IF QUEUE IS MORE THAN 2 IN THE SELECTED TIME SLOT, CHOOSE RANDOM 2 USERS
	if(output.success && output.data.rows.length >= 2)
	{
		const shuffledArr = _.shuffle(output.data.rows)
		user1 = shuffledArr[0]
		user2 = shuffledArr[1]
		date = user1.date;
		if(date)
		{date = JSON.stringify(date).split('T')[0]+`"`}
		time = user1.time;
		console.log("buildmatch first process succeeded from matchday"+rd_day_idx)
	} else if (output.success && output.data.rows.length < 2) {
		return console.log("fewer than 2 users in matchday" + rd_day_idx + ", " +matchtimes[rd_time_idx])
	} else{
		return console.log("buildmatch first step failed at matchday" + rd_day_idx + ", " + matchtimes[rd_time_idx], output)
	}

	//ADD SELECTED 2 USERS TO MATCHES TABLE
	const sql2 = "INSERT INTO matches (`uuid`,`user1_id`,`user1_email`,`user1_rating`,`user2_id`,`user2_email`,`user2_rating`,`date`,`time`) VALUES (uuid()," + user1.id + ",'" + user1.email + "'," + user1.rating + "," + user2.id + ",'" + user2.email + "'," + user2.rating + "," + date + ",'" + time +  "')"

	db.query(sql2, (err,data) =>{
		if(err) return console.log("buildmatch-sql2 error: ",err)
		console.log("adding to matches table success on " + date +" at " + time)
	})

	//DELETE THE QUEUE  
	// const sql3 = "DELETE FROM matchday"+ rd_day_idx + " WHERE (`email`='" + user1.email + "' OR `email`='" + user2.email + "') AND `time`='" + time + "'";
	const sql3 = "DELETE FROM matchday"+ rd_day_idx + " WHERE `time`='" + time + "'";
	console.log(sql3)
	db.query(sql3, (err,data) => {
		if(err) return res.json("sql3 err:", err);
		console.log(`QUEUES DELETED ON ${time} AT matchday${rd_day_idx}`)
		const emailList = [user1.email, user2.email];
		const smtpTransport = nodemailer.createTransport({
			service: process.env.SMTP_SERVICE,
			auth:{
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD
			},
			tls:{
				rejectUnauthorized: false,
			}
		})
	
		const mailOptions = {
			from: 'RANKERS Team',
			to: emailList, // email address of the user
			subject: '[RANKERS] You have a new match!', // subject
			html: `<p>You have match on <b>${date} at ${time}</b>.<br>
			Don't miss the chance to make a new friend!\n
			If the table is already occupied, arrange another time with your opponent.</p>`, // content of email
		  };
	
		smtpTransport.sendMail(mailOptions, (error, responses) => {
			if (error) {
				console.log(`Failed to send authentication email to ${emailList[0]},${emailList[1]} ${error}`)
			} else {
				console.log(`Authentication mail is sent to ${emailList[0]},${emailList[1]}`)
			}
			smtpTransport.close();
		});
		return res.json("whole buildmatch successful");
	})
})

//INSERT RESULT FROM USER IN DB(match_single.js)
app.post('/api/insertresult', (req,res)=>{
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
	
	sql = "INSERT INTO results (`uuid`,`input_user_email`,`winner_id`,`winner_email`,`winner_score1`,`winner_score2`,`winner_score3`,`loser_id`,`loser_email`,`loser_score1`,`loser_score2`,`loser_score3`,`date`,`time`) VALUES (uuid(),'" + inputEmail +"', (SELECT user_id FROM user_stats WHERE `email`='" + winner_email + "'),'"+ winner_email +"'," + winner_scores[0] + "," + winner_scores[1] + "," + winner_scores[2] + ", (SELECT user_id FROM user_stats WHERE `email`='" + loser_email +  "'),'" + loser_email + "'," + loser_scores[0] + "," + loser_scores[1] + "," + loser_scores[2] + ",'" + date + "','" + time + "')"

	db.query(sql, (err,data) => {
		if(err) return res.json(err)
		console.log("INSERT RESULT DONE")
		return res.json(data);
	})
})

//CHECK IF RESULT IS ALREADY SUBMITTED(match_single.js)
app.get("/api/checkresult", (req,res)=>{
	const {date, time, email} = req.query;
	const date1 = date.split('T')[0];

	sql2 = "SELECT * FROM results WHERE `date`='" + date1 + "' AND `time` ='" + time + "' AND `input_user_email`='" + email + "'";

	db.query(sql2, (err,data) => {
	if(err) return res.json(err)
		return res.json(data)
	})
})


//CHECK IF THE INPUTS OF BOTH PLAYER ARE SAME(match_single.js, when submitted)
app.get("/api/resultprocess", (req,res)=>{
	const date = req.query.date;
	const time = req.query.time;

	sql = "SELECT * FROM results WHERE `date`='" + date + "' AND `time` ='" + time + "'";
	var output = syncSql.mysql(config, sql)
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
			const w_changes = 50 + 6*ptsDiff + Math.floor(0.2*ratingDiff) + Math.floor(30*Math.random())
			const l_changes = 50 + 6*ptsDiff + Math.floor(0.2*ratingDiff) + Math.floor(30*Math.random())
			console.log("winner_change, loser_change", w_changes, l_changes)
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

app.post("/api/deleteresult", (req,res)=>{
	const {inputEmail, date, time} = req.body.params1;
	const date1 = date.split('T')[0];

	const sql = "DELETE FROM results WHERE `input_user_email`='" + inputEmail + "' AND `time`='" + time + "' AND `date`='" + date1 + "'";
	db.query(sql, (err,data) => {
		if(err) return res.json(err)
		return res.json("success");
	})
})

app.listen( 8081, () => {
  console.log("Listening to backend on port 8081")
})