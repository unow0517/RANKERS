const express = require("express")
const mysql = require("mysql")
var cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
  host: "127.0.0.1",
  password: "Fhtep2031!",
  user: "root",
  database: "RANKERS",
})

db.connect(err => {
  if (err) throw err;
})

// app.post('/signup', (req, res) => {
//   const sql = "INSERT INTO users (`email`, `password`) VALUES (?)";
//   const values = [
//     req.body.email,
//     req.body.password
//   ]
//   db.query(sql, [values], (err, data) => {
//     if (err) {
//       return res.json(err)
//     }
//     return res.json(data);
//   })
// })


// app.post('/login', (req, res) => {
//   const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";
//   db.query(sql, [req.body.email, req.body.password], (err, data) => {
//     if (err) {
//       return res.json(err);
//     }
//     if (data.length > 0) {
//       return res.json("Success")
//     } else {
//       return res.json("Failed")
//     }
//   })
// })

app.post('/matchqueue', (req,res) => {
	const sql = "INSERT INTO matchday" + req.body.matchDayIdx + " (`email`,`time`,`date`,`user_id`) VALUES (?,(SELECT id FROM users WHERE `email`='" + req.body.email+"'))"
	const values = [
		req.body.email,
		req.body.matchTime,
		req.body.matchDay
	]
	db.query(sql,[values],(err,data)=>{
		if(err){
			return res.json(err)
		}
		console.log("hello")
		return res.json("Success")
	})
})

app.get('/matchinfo', (req,res)=>{
	const email = req.query.email;
	// console.log(req.query)
	const sql = "SELECT * FROM matchday3 WHERE `email`='" + email + "' UNION SELECT * FROM matchday4 WHERE `email`='" + email + "'";
	db.query(sql, (err, data)=> {
		if(err) return res.json(err);
		return res.json(data);
	})
})

app.listen( 8081, () => {
  console.log("Listening to backend on port 8081")
})