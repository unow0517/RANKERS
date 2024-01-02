const express = require("express")
const mysql = require("mysql")
var cors = require('cors')
require('dotenv').config()
const _ =require('underscore');

const app = express()

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

var user1=[];
var user2=[];
app.get('/buildmatch', (req,res)=> {
	
	const sql = "SELECT * FROM matchday2 WHERE `time` = '10:00' ORDER BY rating LIMIT 5";
	db.query(sql, (err, data)=> {
		if(err) return res.json(err);
		// console.log(data)
		// console.log("rdmIdx", _.shuffle(data))
		const shuffledArr = _.shuffle(data)
		// console.log("sfArr",shuffledArr)
		user1 = shuffledArr[0];
		user2 = shuffledArr[1];
		return res.json(data);
	})
	const sql2 = "INSERT "
	db.query(sql, )

	// const sql = "SELECT * FROM matchday2 ORDER BY ABS(rating-(SELECT rating FROM matchday2 WHERE))"
})
// SELECT * FROM matchday2 WHERE `time`='10:00' ORDER BY ABS(1500-);

app.listen( 8081, () => {
  console.log("Listening to backend on port 8081")
})