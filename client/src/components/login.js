import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    const navigate = useNavigate();
    const onButtonClickHome = () => {
      navigate("/")  
    }    
    const onButtonClick = () => {
        // Set initial error values to empty
        setEmailError("")
        setPasswordError("")

        // Check if the user has entered both fields correctly
        if ("" === email) {
            setEmailError("Please enter your email")
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email")
            return
        }

        if ("" === password) {
            setPasswordError("Please enter a password")
            return
        }

        if (password.length < 7) {
            setPasswordError("The password must be 8 characters or longer")
            return
        }

		logIn()    
    }

    // Log in a user using email and password
    const logIn = () => {
      fetch("http://localhost:3080/authlogin", {
          	method: "POST",
          	headers: {
          	    'Content-Type': 'application/json'
          	  },
          	body: JSON.stringify({ email, password }),    
      })
      .then(r => r.json())
      .then(r => {
        if ('success' === r.message) {
            localStorage.setItem("user", JSON.stringify({email, token: r.token}))
            props.setLoggedIn(true)
            props.setEmail(email)
            navigate("/")
		}else if('failed' === r.message)
      		window.alert("Wrong email or password")
        else
        	window.alert("You don't have an account, sign up first")
      	})
  }

    return( 
		<div className={"mainContainer"}>
   		    <div className={"titleContainer"}>
   		        <div>Login</div>
   		    </div>
   		    <br />
   		    <div className={"inputContainer"}>
   		        <input
   		            value={email}
   		            placeholder="Enter your email here"
   		            onChange={ev => setEmail(ev.target.value)}
   		            className={"inputBox"} />
   		        <label className="errorLabel">{emailError}</label>
   		    </div>
   		    <br />
   		    <div className={"inputContainer"}>
   		        <input
   		            value={password}
   		            placeholder="Enter your password here"
   		            onChange={ev => setPassword(ev.target.value)}
   		            className={"inputBox"}
						type="password" />
   		        <label className="errorLabel">{passwordError}</label>
   		    </div>
   		    <br />
   		    <div className={"inputContainer"}>
   		        <input
   		            className={"inputButton"}
   		            type="button"
   		            onClick={onButtonClick}
   		            value={"Log in"} />
   		  </div>
   		  <div className={"inputContainer"}>
   		        <input
   		            className={"inputButton"}
   		            type="button"
   		            onClick={onButtonClickHome}
   		            value={"Home"} />
   		    </div>
   		</div>)
}

export default Login