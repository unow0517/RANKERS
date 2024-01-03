import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Navbar from './Navbar';
import Findmatch from './components/findmatch';
import Profile from './components/profile'
import Leaderboard from './components/leaderboard'
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
//   const locStLoggedIn = localStorage.getItem("isLoggedIn")
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [matchmake, setMatchmake] = useState("")
	// console.log("localStorage:", localStorage)
	// console.log("loggedInState", loggedIn)
	// console.log("email", email)
	// console.log("mM",matchmake)
  
  useEffect(() => {

	axios.post("http://localhost:8081/buildmatch")
	.then(data => {
		console.log("DataBM", data.data)
		setMatchmake(data.data)})
	.catch(err => console.log(err))
	// if(matchmake === 'success'){
	// 	axios.post("http://localhost:8081/afterbuildmatch")
	// 	.then(data => {
	// 		console.log("two users deleted from matchday after matchmaking")
	// 	})
	// 	.catch((err)=>console.log(err))
	// 	setMatchmake("");
	// }

    // Fetch the user email and token from local storage
    const user = JSON.parse(localStorage.getItem("user"))
	// console.log("user.token:", user.token)


    // If the token/email does not exist, mark the user as logged out
    if (!user || !user.token) {
	  console.log("no user or no user token")
      setLoggedIn(false)
      return
    }
    // If the token exists, verify it with the auth server to see if it is valid
    fetch("http://localhost:3080/verify", {
            method: "POST",
            headers: {
                'jwt-token': user.token
              }
        })
        .then(r => r.json())
        .then(r => {
			// console.log("r", r)
            setLoggedIn('success' === r.message)
            setEmail(user.email || "")
        })
	

	}, [])


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={loggedIn}/>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setEmail={setEmail} setLoggedIn={setLoggedIn}/>} />
          <Route path="/signup" element={<Signup setEmail={setEmail} setLoggedIn={setLoggedIn}/>} />
          <Route path="/findmatch" element={<Findmatch email={email} loggedIn = {loggedIn} />} />
		  <Route path="/profile" element={<Profile email={email} setLoggedIn={setLoggedIn} loggedIn = {loggedIn}/>} />
		  <Route path="/leaderboard" element={<Leaderboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;