import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Navbar from './Navbar';
import Findmatch from './components/findmatch';

import './App.css';
import { useEffect, useState } from 'react';

function App() {
//   const locStLoggedIn = localStorage.getItem("isLoggedIn")
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
	console.log("localStorage:", localStorage)
	console.log("loggedInState", loggedIn)
  useEffect(() => {
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
			console.log("r", r)
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;