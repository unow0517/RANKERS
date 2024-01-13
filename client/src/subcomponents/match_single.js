import React, {useState, useEffect} from 'react';
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
	const [inDatabase, setInDatabse] = useState(false);

	useEffect(()=>{
		const params = {
			email : email,
			date : date,
			time : time
		}
		if(localStorage.getItem("user")){
			axios.get("http://localhost:8081/checkresult", {params})
			.then(data => {
				if(data.data.length === 1){
					// console.log("checkResult",data.data)
					// setInDatabse(data.data[0].date.split('T')[0] + "," + data.data[0].time)
					setInDatabse(true)
				}
			})
			.catch(err => console.log("err",err))
		}
	})

	const params2 = {
		date: date,
		time: time
	}

	const resultProcess = (params) => {
		axios.get("http://localhost:8081/resultprocess",{params})
		.then(data => {
			if(data.data==="waitForOpponent"){
				window.alert("Score Submitted, please wait for your opponent's score input")
				setSubmitted(true)
			}else if(data.data==="scoreRight"){
				window.alert("Score Submitted, your score input is same as your opponent's input. Rating will be calculated")
				setSubmitted(true)
			}else if(data.data === "tooManyResults"){
				window.alert("Score Submitted, but already too many results submitted")
				setSubmitted(true)
			}else if(data.data==="scoreDiffrent"){
				window.alert("Your Score Input and Opponent's are different, submit score again")
				setSubmitted(true)
			}

		})
		.catch(err=>console.log("error",err))
	}

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

		axios.post("http://localhost:8081/insertresult",{params})
		.then(data => {
			// console.log("RESULT INSERTED")
			window.alert("Scores are submitted")
			resultProcess(params2)
		})
		.catch(err=>console.log("error",err))

		setSubmitted(false)
	}
	
	// console.log("EMAILS",user1Email,user2Email)
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
				{submitted || inDatabase? <input
					className="inactiveBtn"
					type="button"
				 	value="Result Submitted"
		   		/> : <input
					className="inputButton"
					type="button"
					onClick={() =>  {
						onClickSubmit()
					}}
				 	value="Submit Result"
		   		/>}
			</div>
		</>
	)
}

export default Matchsingle;