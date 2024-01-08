import React, {useEffect, useState} from 'react';
import "../App.css"
import axios from 'axios';
import Matchsingle from '../subcomponents/match_single';

const Match = (props) => {
	const [user1Email, setUser1Email] = useState("");
	const [user2Email, setUser2Email] = useState("");
	const [user1_Score1, setUser1_Score1] = useState(0);
	const [user1_Score2, setUser1_Score2] = useState(0);
	const [user1_Score3, setUser1_Score3] = useState(0);
	const [user2_Score1, setUser2_Score1] = useState(0);
	const [user2_Score2, setUser2_Score2] = useState(0);
	const [user2_Score3, setUser2_Score3] = useState(0);
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [errorMsg, setErrorMsg]  = useState("");
	const [submitted, setSubmitted] = useState(false);

	const matchData = props.matchData;
	var email = '';
	if(localStorage.getItem("user")){
		email = JSON.parse(localStorage.getItem("user")).email;
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

	var matchPrint = "";
	matchPrint = matchData.toReversed().map( (item,index) => {
		// const user1_email =item.user1_email
		// const user2_email = item.user2_email
		<Matchsingle 
			item = {item} 
			index={index} 
			email={email} 
			setUser1_Score1={setUser1_Score1}
			setUser1_Score2={setUser1_Score2}
			setUser1_Score3={setUser1_Score3}
			setUser2_Score1={setUser2_Score1}
			setUser2_Score2={setUser2_Score2}
			setUser2_Score3={setUser2_Score3}
			setUser1Email={setUser1Email}
			setUser2Email={setUser2Email}
			setDate={setDate}
			setTime={setTime}
			errorMsg={errorMsg}
			onClickSubmit={onClickSubmit}
		/>})


	// 	if(item.user1_email === email || item.user2_email === email){
	// 		return(
	// 			<li className="matchList" key={index}>
	// 				<h1><b>{item.date.split('T')[0]}, {item.time}</b></h1>
	// 				<div className="matchContainer">
	// 					<div className="userContainer">
	// 						<div>{item.user1_email}</div>
	// 						<div>rating: {item.user1_rating}</div>
	// 						<h3 className="scoreTitle">Scores</h3>
	// 						<ul>
	// 							<li className='scoreContainer'>
	// 								<label htmlFor="score1">Round1 : </label>
	// 								<input 
	// 									type="number" 
	// 									name="user1_score1" 
	// 									id="user1_score1"
	// 						            onChange={ev => setUser1_Score1(ev.target.value)}
	// 								/>
	// 							</li>
	// 							<li className='scoreContainer'>
	// 								<label htmlFor="score2">Round2 : </label>
	// 								<input 
	// 									type="number" 
	// 									name="user1_score2" 
	// 									id="user1_score2"
	// 									onChange={ev => setUser1_Score2(ev.target.value)}
	// 								/>
	// 							</li>
	// 							<li className='scoreContainer'>
	// 								<label htmlFor="score3">Round3 : </label>
	// 								<input 
	// 									type="number" 
	// 									name="user1_score3" 
	// 									id="user1_score3"
	// 									onChange={ev => {
	// 										setUser1_Score3(ev.target.value)

	// 									}}          
	// 								/>
	// 							</li>			
	// 						</ul>
	// 					</div>
	// 					<div className="versus">
	// 						<div>VS</div>
	// 					</div>
	// 					<div className="userContainer">
	// 						<div>{item.user2_email}</div>
	// 						<div>rating: {item.user2_rating}</div>
	// 						<h3 className="scoreTitle">Scores</h3>
	// 						<ul>
	// 							<li className='scoreContainer'>
	// 								<label htmlFor="score1">Round1 : </label>
	// 								<input 
	// 									type="number" 
	// 									name="user2_score1" 
	// 									id="user2_score1"							            
	// 									onChange={ev => setUser2_Score1(ev.target.value)}										
	// 								/>
	// 							</li>
	// 							<li className='scoreContainer'>
	// 								<label htmlFor="score2">Round2 : </label>
	// 								<input 
	// 									type="number" 
	// 									name="user2_score2" 
	// 									id="user2_score2"
	// 						            onChange={ev => setUser2_Score2(ev.target.value)}	
	// 								/>
	// 							</li>
	// 							<li className='scoreContainer'>
	// 								<label htmlFor="score3">Round3 : </label>
	// 								<input 
	// 									type="number" 
	// 									name="user2_score3" 
	// 									id="user2_score3"
	// 						            onChange={ev => {
	// 										setUser2_Score3(ev.target.value)
	// 										setUser1Email(item.user1_email)
	// 										setUser2Email(item.user2_email)
	// 										setDate(item.date.split('T')[0])
	// 										setTime(item.time)}}
	// 								/>
	// 							</li>			
	// 						</ul>
	// 					</div>
	// 					<div className="errorLabel">{errorMsg}</div>
	// 					{submitted? <input
	// 						className="inactiveBtn"
	// 						type="button"
	// 					 	value="Result Submitted"
	// 			   		/> : <input
	// 						className="inputButton"
	// 						type="button"
	// 						onClick={() => {
	// 							onClickSubmit()
	// 							}}
	// 					 	value="Submit Result"
	// 			   		/>}
	// 				</div>
	// 			</li>
	// 		)
	// 	} else {
	// 		return (<li key={index}></li>)
	// 	}
	// })



	// console.log("scorearray:", user1scores, user2scores)
	return (
		<>{props.loggedIn? <div >
			<div>Your Opponent Should Submit The Same Values For Scores. Otherwise Penalty Will Be Given.</div>
			<ul className="ul">
				{matchPrint}
			</ul>
		  </div> : <div className="matchPage"> Please Log In First</div>}
		</>

	)
}

export default Match;