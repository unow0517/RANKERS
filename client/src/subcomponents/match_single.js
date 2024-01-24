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
	const [inDatabase, setInDatabse] = useState(false);
	const email = props.email;
	
	useEffect(()=>{
		const params = {
			email : email,
			date : date,
			time : time
		}
		if(localStorage.getItem("user")){
			axios.get("http://localhost:8081/api/checkresult", {params})
			.then(data => {
				if(data.data.length === 1){
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
		axios.get("http://localhost:8081/api/resultprocess",{params})
		.then(data => {
			if(data.data==="waitForOpponent"){
				window.alert("Score Submitted, please wait for your opponent's score input")
				setSubmitted(true)
				window.location.reload();
			}else if(data.data==="scoreRight"){
				window.alert("Score Submitted, your score input is same as your opponent's input. Rating will be calculated")
				setSubmitted(true)
				window.location.reload();
			}else if(data.data === "tooManyResults"){
				window.alert("Score Submitted, but already too many results are submitted")
				setSubmitted(true)
				window.location.reload();
			}else if(data.data==="scoreDiffrent"){
				window.alert("Your Score Input and Opponent's are different, delete and submit score again")
				setSubmitted(true)
				window.location.reload();
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
		} else if(user1_Score1 < 0 || user1_Score2 < 0 || user1_Score3 < 0 || user2_Score1 < 0 || user2_Score2 < 0 || user2_Score3 < 0){
			return setErrorMsg("No Negative Number Plz")
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

		axios.post("http://localhost:8081/api/insertresult",{params})
		.then(data => {
			resultProcess(params2)
		})
		.catch(err=>console.log("error",err))

		setSubmitted(false)
	}

	const params1 = {
		inputEmail: email,
		date: date,
		time: time
	}


	const onClickDelete = () => {
		axios.post("http://localhost:8081/api/deleteresult",{params1})
		.then(data => {
			console.log(data)
			if(data.data === "success")
				window.alert("Submission is deleted!")
		})
		.catch(err=>console.log("error: ", err))
		window.location.reload();
	}
	
	// console.log("EMAILS",user1Email,user2Email)
	return(
		<>
			<h1 className='matchSingleTitle'><b>{date.split('T')[0]}, {time}</b></h1>
			<div className="matchContainer">
				<Matchuser
					date={date}
					time={time} 
					item={item}
					user_email={item.user1_email}
					user_rating={item.user1_rating}
					setUser_Score1={setUser1_Score1} 
					setUser_Score2={setUser1_Score2}
					setUser_Score3={setUser1_Score3}
					// userScores={[user1_Score1,user1_Score2,user1_Score3]}
					setUserEmail={setUser1Email}
				/>
				<div className="versus">
					<div>VS</div>
				</div>
				<Matchuser
					date={date}
					time={time}
					item={item}
					user_email={item.user2_email}
					user_rating={item.user2_rating}
					setUser_Score1={setUser2_Score1} 
					setUser_Score2={setUser2_Score2}
					setUser_Score3={setUser2_Score3}
					// userScores={[user2_Score1,user2_Score2,user2_Score3]}
					setUserEmail={setUser2Email}
					setDate={setDate}
					setTime={setTime}
				/>
				<div className='submitContainer'>
					{submitted || inDatabase? <>
					<input
						className="inactiveBtn"
						type="button"
					 	value="Result Submitted"/> 
					<input className="deleteBtn" type="button" value="Delete Submission" onClick={onClickDelete}/>
					</>: 
					<input
						className="inputButton"
						type="button"
						onClick={() =>  {
							onClickSubmit()
						}}
					 	value="Submit Result"
		   			/>}
					<div className="errorLabel">{errorMsg}</div>
				</div>
			</div>
		</>
	)
}

export default Matchsingle;