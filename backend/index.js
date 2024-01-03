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
const db = mysql.createConnection({
  host: "127.0.0.1",
  password: `${process.env.MYSQL_PW}`,
  user: "root",
  database: "RANKERS",
  multipleStatements: true
})

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

//search 5 emails with lowest rating => choose random 2 emails and put them in matches 
// var user1=[];
// var user2=[];
// var user1_id;
// var user1_email;
// var user1_rating;
// var user2_id;
// var user2_email;
// var user2_rating;
// var date;
// var time;

app.post('/buildmatch', async (req,res)=> {
	var user1=[];
	var user2=[];
	var user1_id;
	var user1_email;
	var user1_rating;
	var user2_id;
	var user2_email;
	var user2_rating;
	var date;
	var time;

	const sql = "SELECT * FROM matchday2 WHERE `time` = '10:00' ORDER BY rating LIMIT 5";	
	var output = syncSql.mysql(config, sql)
	// console.log("0",output.data.rows[0])
	// console.log("1",output.data.rows[1])
	const shuffledArr = _.shuffle(output.data.rows)
	user1 = shuffledArr[0]
	user2 = shuffledArr[1]

	// console.log("0",user1)
	// console.log("1",user2)

	// db.query(sql, (err, data)=> {
	// 	if(err) return res.json(err);

	// 	if(data.length < 2) { return console.log("not enough users to put in match")  }
		
	// 	const shuffledArr = _.shuffle(data)
	// 	// console.log("sfArr",shuffledArr)
	// 	user1 = shuffledArr[0];
	// 	user2 = shuffledArr[1];
	// 	// console.log("user1inquery: ", user1.id)


	// })

	// console.log("user1: ", user1)

	// user1_id = user1.id;
	// user1_email = user1.email;
	// user1_rating = user1.rating;
	// user2_id = user2.id;
	// user2_email = user2.email;
	// user2_rating = user2.rating;

	date = user1.date;
	console.log("user1_id", user1.id)
	if(date)
	{date = JSON.stringify(date).split('T')[0]+`"`}
	time = user1.time;
	// console.log(typeof(user1.id));
	// console.log(date);
	const sql2 = "INSERT INTO matches (`uuid`,`user1_id`,`user1_email`,`user1_rating`,`user2_id`,`user2_email`,`user2_rating`,`date`,`time`) VALUES (uuid()," + user1.id + ",'" + user1.email + "'," + user1.rating + "," + user2.id + ",'" + user2.email + "'," + user2.rating + "," + date + ",'" + time +  "')"

	db.query(sql2, (err,data) =>{
		if(err) console.log("matchinserterror")
		console.log("matchmaking success")
		return res.json("insert to matches success")
	})
})

app.post('/afterbuildmatch', (req,res)=>{
	const sql3 = "DELETE FROM matchday2 WHERE `email`='" + user1_email + "' OR `email`='" + user2_email + "' AND `time`='10:00'";
	db.query(sql3, (err,data) =>{
		if(err) return res.json(err)
		return res.json("success");
	})
})

app.listen( 8081, () => {
  console.log("Listening to backend on port 8081")
})