const express = require("express")
const bcrypt = require("bcrypt")
var cors = require('cors')
const jwt = require("jsonwebtoken")
const mysql = require("mysql")
require('dotenv').config()
const nodemailer = require('nodemailer')

//CONNECT MYSQL DB
const db = mysql.createConnection({
  host: "127.0.0.1",
  password: `${process.env.MYSQL_PW}`,
  user: "root",
  database: "RANKERS",
  multipleStatements: true
})

// Initialize Express app
const app = express()

// Define a JWT secret key. This should be isolated by using env variables for security
// const jwtSecretKey = "dsfdsfsdfdsvcsvdfgefg"
const jwtSecretKey = `${process.env.JWT_SECRET_KEY}`
// const token = jwt.sign(loginData, jwtSecretKey);


// Set up CORS and JSON middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic home route for the API
app.get("/", (_req, res) => {
  res.send("Auth API.\nPlease use POST /auth & POST /verify for authentication")
})

// //SIGN UP
// app.post("/signup", (req, res) => {
//   const { email, password } = req.body;
//   console.log("e,pw", email, password);
//   return res.json(res)
// })

// The auth endpoint that creates a new user record or logs a user based on an existing record
app.post("/authsignup", (req, res) => {
  const { email, password } = req.body;
  // LOOK UP THE USER ENTRY IN THE DB
  const sql = "SELECT * FROM users WHERE `email` = ?";
  db.query(sql, [email], async (err, data) => {
    if (err) {
      return res.json(err);
    }
    if (data.length > 0) {
      const comparison = await bcrypt.compare(password, data[0].password)
    //   console.log("comparison",comparison)
	  let loginData = {
		email,
		signInTime: Date.now(),
	  };
	  const token = jwt.sign(loginData, jwtSecretKey);
      if (comparison) {
        return res.json({ message: 'success', token})
      }
      else {
        return res.json({ message: 'failed', token})
      }
    //IF NO MATCHING EMAIL FOUND
    } else {
	  return res.json({ message: 'notFoundInDb'})

	// 	bcrypt.hash(password, 10, function (_err, hash) {
    //     console.log("line 67",{ email, password: hash })

    //     const sql = "INSERT INTO users (`email`, `password`) VALUES (?); INSERT INTO user_stats (`email`,`user_id`) VALUES ('" + req.body.email + "', (SELECT id FROM users WHERE `email`='" + req.body.email+"'))";
    //     const values = [
    //       req.body.email,
    //       hash
    //     ]
    //     db.query(sql, [values], (err, data) => {
    //       if (err) {
    //         console.log(err, "line 85")
    //         // return res.json(err)
    //       } 
    //       console.log("INSERT SUCCEED")
    //       // return res.json(data);
    //     })
    //     let loginData = {
    //         email,
    //         signInTime: Date.now(),
    //     };
    //     const token = jwt.sign(loginData, jwtSecretKey);
    //     res.status(200).json({ message: "new user added", token });
    // });
    }
  })
})


app.post("/authlogin", (req, res) => {
  const { email, password } = req.body;
  // LOOK UP THE USER ENTRY IN THE DB
  const sql = "SELECT * FROM users WHERE `email` = ?";
  db.query(sql, [email], async (err, data) => {
    // console.log("DATA",data[0].password)ƒ
    if (err) {
      return res.json(err);
    }
    if (data.length > 0) {
      const comparison = await bcrypt.compare(password, data[0].password)
      console.log("comparison",comparison)
	  let loginData = {
		email,
		signInTime: Date.now(),
	  };
	  const token = jwt.sign(loginData, jwtSecretKey);
      if (comparison) {
        return res.send({ message: 'success', token})
      }
      else {
        return res.send({ message: 'failed'})
      }
    //IF NO MATCHING EMAIL FOUND, SEND USER TO SIGN UP
    } else {
	  let loginData = {
	  	email,
	  	signInTime: Date.now(),
	    };
	    const token = jwt.sign(loginData, jwtSecretKey);		
      return res.send({ message: 'nodata', token })
    }
  })
})


// The verify endpoint that checks if a given JWT token is valid
app.post('/verify', (req, res) => {
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


// An endpoint to see if there's an existing account for a given email address
app.post('/check-account', (req, res) => {
  const { email } = req.body

  // FIND USER WITH EMAIL
  const sql = "SELECT * FROM users WHERE `email` = ?";
  db.query(sql, email, (err, data) => {
    if (err) {
      return res.json({status: "User does not exist", accountExists: 0});
    }
    else if (data.length == 1) {
      return res.status(200).json({ status: "User exists", accountExists: 1})
    } else {
      return res.status(200).json({ status: "Multiple User exists", accountExists: 1})
    }
  })
  // console.log("line 145", user)
  
  // res.status(200).json({
  //     status: user != null ? "User exists" : "User does not exist", accountExists: user != null
  // })
})

var authNumber = '';
app.post('/sendverificationemail', (req,res) => {
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

app.post('/verificationcheck',(req,res) => {
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

app.listen(3080,()=>{
	console.log("Listening to 3080 for Auth-server")
})