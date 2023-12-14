const express = require("express")
const mysql = require("mysql")
var cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Fhtep2031!apple",
  database: "signup"
})

db.connect(err => {
  if (err) throw err;
})

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO users (`name`, `email`, `password`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.password
  ]
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json(err)
    } 
    return res.json(data);
  })
})


app.post('/login', (req, res) => {
  const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json(err);
    }
    if (data.length > 0) {
      return res.json("Success")
    } else {
      return res.json("Failed")
    }
  })
})

// app.get("/", (req, res) => {
//   res.json("hello this is the backend")
// })


app.listen(8081, () => {
  console.log("Listening to backend on port8801")
})