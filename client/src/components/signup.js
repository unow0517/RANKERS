import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
	const [verification, setVerification] = useState(false)
	const [codeInput, setCodeInput]	= useState(0);
	const [errorMsg, setErrorMsg] = useState("");
	const [token, setToken] = useState("");
    const navigate = useNavigate();

    const onButtonClickHome = () => {
      navigate("/")  
    }
    const onClickSignUp = () => {
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


	const sendVerificationEmail = () => {
		fetch("http://localhost:3080/sendverificationemail",{
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({email})
		})
		.then(r => r.json())
		.then(r => {
			// console.log("emailveriData: ",r)
			setVerification(true)
		})
	}

    // Log in a user using email and password
    const logIn = () => {
      fetch("http://localhost:3080/authsignup", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
            },
          body: JSON.stringify({ email, password }),    
      })
      .then(r => r.json())
      .then(r => {
          if ('success' === r.message) {
            window.alert("You already have an account, you will be logged in")
            console.log("r.mes",r.message)
            localStorage.setItem("user", JSON.stringify({email, token: r.token}))
			// localStorage.setItem("isLoggedIn",true);
            props.setLoggedIn(true)
            props.setEmail(email)
            // console.log("line81")
            navigate("/")
          } else if('failed' === r.message) {
            window.alert("An account already exists with this e-mail")
          } else if('notFoundInDb' === r.message){
			//if account is not in db send to email verification.
			window.alert("Verification code is sent to the email, please finish the verification.")
			sendVerificationEmail();
			setToken(r.token)
			
            // window.alert("you signed up successfully")
            // props.setLoggedIn(true)
            // localStorage.setItem("user", JSON.stringify({email, token: r.token}))
			// // localStorage.setItem("isLoggedIn",true);
            // props.setEmail(email)
            // navigate("/")
          }
      })
 	}

	const onClickCodeSubmit = () =>{
		const params = {
			codeInput: codeInput,
			email: email,
			password: password
		}
		axios.post("http://localhost:3080/verificationcheck", params)
		.then(data => {
			console.log(data)
			if(data.data.message === 'verification successful') {
				window.confirm("Verification is successful, welcome to RANKERS!")
				props.setLoggedIn(true)
	            localStorage.setItem("user", JSON.stringify({email, token}))
	          	props.setEmail(email)
				navigate("/")
			}else {setErrorMsg("The code is not correct")}
		})
		.catch(err => console.log(err))
	}

    return(
		<div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Sign-Up</div>
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

		{verification ?
	  	<div>
			<label htmlFor="codeinput">Verification Code</label>
			<input placeholder='Enter Verification Code Here' 
				onChange={e => {
					setCodeInput(e.target.value)
				}} 
				name='codeinput'/>
			<input type="button" onClick={onClickCodeSubmit} value="Submit"/>
			<label className="errorLabel">{errorMsg}</label>
		</div> : <div/>}


      	<div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onClickSignUp}
                value={"Sign up"} />
        </div>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClickHome}
                value={"Home"} />
        </div>
    </div>
	)
}

export default Signup