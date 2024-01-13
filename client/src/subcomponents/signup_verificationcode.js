import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const VerificationCode = (props) => {
	const [codeInput, setCodeInput]	= useState(0);
	const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();
	const email = props.email;
	const token = props.token;

	const onClickSubmit = () =>{
		const params = {
			codeInput: codeInput
		}
		axios.post("http://localhost:3080/verificationcheck", params)
		.then(data => {
			console.log(data)
			if(data.data === 'verification successful') {
				window.confirm("Verification is successful, welcome to RANKERS!")
				props.setLoggedIn(true)
	            localStorage.setItem("user", JSON.stringify({email, token}))
	          	props.setEmail(email)
				navigate("/")
			}else {setErrorMsg("The code is not correct")}
		})
		.catch(err => console.log(err))
	}
	console.log("CodeInput",codeInput)
	return(
		<div>
			<label htmlFor="codeinput">Verification Code</label>
			<input placeholder='Enter Verification Code Here' 
				onChange={e => {

					setCodeInput(e.target.value)
				}} 
				name='codeinput'/>
			<input type="button" onClick={onClickSubmit} value="Submit"/>
			<label className="errorLabel">{errorMsg}</label>
		</div>
	)
}

export default VerificationCode