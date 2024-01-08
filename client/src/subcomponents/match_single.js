import React, {useState} from 'react';
import "../App.css"
import axios from 'axios';
import Matchuser from '../subcomponents/match_user'

const Matchsingle = (props) => {
	const item = props.item;
	const [user1Email, setUser1Email] = useState("");
	const [user2Email, setUser2Email] = useState("");
	const [user1_Score1, setUser1_Score1] = useState(0);
	const [user1_Score2, setUser1_Score2] = useState(0);
	const [user1_Score3, setUser1_Score3] = useState(0);
	const [user2_Score1, setUser2_Score1] = useState(0);
	const [user2_Score2, setUser2_Score2] = useState(0);
	const [user2_Score3, setUser2_Score3] = useState(0);
	const [date, setDate] = useState(item.date);
	const [time, setTime] = useState(item.time);
	const [errorMsg, setErrorMsg]  = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [email, setEmail] = useState(props.email);

	const onClickSubmit = () => {
		if(user1_Score1 === '' || user1_Score2 === '' || user1_Score3 === '' || user2_Score1 === '' || user2_Score2 === '' ||user2_Score3 === ''){
			return setErrorMsg("Score must not be empty")
		} else if(user1_Score1 === user2_Score1 || user1_Score2 === user2_Score2 || user1_Score3 === user2_Score3){
			return setErrorMsg("You cannot enter draw result")
		} else if((user1_Score1 < 11 && user2_Score1 < 11) || (user1_Score2 < 11 && user2_Score2 < 11) || (user1_Score3 < 11 && user2_Score3 < 11)){
			return setErrorMsg("Match Point is 11")
		}

		const params = {
			inputEmail: email,
			user1_email: user1Email,
			user2_email: user2Email,
			user1_score: [user1_Score1,user1_Score2,user1_Score3],
			user2_score: [user2_Score1,user2_Score2,user2_Score3],
			date: date,
			time: time
		}
		console.log("user1score",user1_Score1)
		console.log("params",params)

		// console.log("getId",document.getElementById("user1_score1").value)

		axios.post("http://localhost:8081/insertresult",{params})
		.then(data => {
			console.log(data)
			window.alert("Scores are submitted")
			setSubmitted(true)
		})
		.catch(err=>console.log("error",err))

		const params1 = {
			date: date,
			time: time
		}
		axios.get("http://localhost:8081/resultprocess",{params})
		.then(data => {
			console.log(data)
			window.alert("Scores are submitted")	
		})
		.catch(err=>console.log("error",err))
		setSubmitted(false)
	}
	
	console.log("EMAILS",user1Email,user2Email)
	return(
		// <li className="matchList" key={props.key}>
		<>
			<h1><b>{date.split('T')[0]}, {time}</b></h1>
			<div className="matchContainer">
				<Matchuser 
					item={item}
					user_email={item.user1_email}
					user_rating={item.user1_rating}
					setUser_Score1={setUser1_Score1} 
					setUser_Score2={setUser1_Score2}
					setUser_Score3={setUser1_Score3}
					setUserEmail={setUser1Email}
				/>
				<div className="versus">
					<div>VS</div>
				</div>
				<Matchuser
					item={item}
					user_email={item.user2_email}
					user_rating={item.user2_rating}
					setUser_Score1={setUser2_Score1} 
					setUser_Score2={setUser2_Score2}
					setUser_Score3={setUser2_Score3}
					setUserEmail={setUser2Email}
					setDate={setDate}
					setTime={setTime}
				/>
				<div className="errorLabel">{errorMsg}</div>
				{submitted? <input
					className="inactiveBtn"
					type="button"
				 	value="Result Submitted"
		   		/> : <input
					className="inputButton"
					type="button"
					onClick={() => {
						onClickSubmit()
					}}
				 	value="Submit Result"
		   		/>}
			</div>
					{/* </li> */}
		</>
	)
}

export default Matchsingle;