import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Match from './components/match';
import Home from './components/home';
import Login from './components/login';
import Navbar from './Navbar';
import Findmatch from './components/findmatch';
import Profile from './components/profile'
import Leaderboard from './components/leaderboard'
import Signup from './components/signup';
import About from './components/about'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [matchData,setMatchData] = useState([]);
	// console.log("localStorage:", localStorage)
	// console.log("loggedInState", loggedIn)
	// console.log("email", email)
	// console.log("mM",matchmake)
  
	
  useEffect(() => {

	axios.post("http://localhost:8081/buildmatch")
	.then(data => console.log("DataBM", data.data))
	.catch(err => console.log(err))

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
	
	axios.get("http://localhost:8081/matchinfo")
	.then((data) => {
		// console.log("matchInfodata",data.data)
		setMatchData(data.data)})

	}, [])


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email} setEmail={setEmail}/>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setEmail={setEmail} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setEmail={setEmail} setLoggedIn={setLoggedIn}/>} />
          <Route path="/signup" element={<Signup setEmail={setEmail} setLoggedIn={setLoggedIn}/>} />
          <Route path="/findmatch" element={<Findmatch email={email} loggedIn = {loggedIn} matchData={matchData} />} />
		  <Route path="/profile" element={<Profile setEmail={setEmail} setLoggedIn={setLoggedIn} loggedIn = {loggedIn}/>} />
		  <Route path="/leaderboard" element={<Leaderboard/>}/>
		  <Route path="/match" element={<Match email={email} loggedIn = {loggedIn} matchData={matchData} />}/>
		  <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;