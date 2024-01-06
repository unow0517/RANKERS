import React, {useEffect, useState} from 'react';
import "../App.css"
import Usercontainer from '../subcomponents/match_userContainer'
import {Link} from "react-router-dom";
import axios from 'axios';
import qs from 'qs';

const Match = (props) => {
	const [user1Email, setUser1Email] = useState("");
	const [user2Email, setUser2Email] = useState("");
	const [user1_Score1, setUser1_Score1] = useState("");
	const [user1_Score2, setUser1_Score2] = useState("");
	const [user1_Score3, setUser1_Score3] = useState("");
	const [user2_Score1, setUser2_Score1] = useState("");
	const [user2_Score2, setUser2_Score2] = useState("");
	const [user2_Score3, setUser2_Score3] = useState("");
	const [errorMsg, setErrorMsg]  = useState("");

	const matchData = props.matchData;
	var email = '';
	if(localStorage.getItem("user")){
		email = JSON.parse(localStorage.getItem("user")).email;
	}
	// console.log("matchData",matchData)
	// const params = {
	// 	inputEmail: email, 
	// 	user1scores: user1scores, 
	// 	user2scores: user2scores
	// }

	const onClickSubmit = () => {
		if(user1_Score1 === '' || user1_Score2 === '' || user1_Score3 === '' || user2_Score1 === '' || user2_Score2 === '' ||user2_Score3 === ''){
			return setErrorMsg("Score must not be empty")
		}
		const params = {
			inputEmail: email, 
			user1_score:[user1_Score1,user1_Score2,user1_Score3],
			user2_score:[user2_Score1,user2_Score2,user2_Score3]
		}
		// console.log("user1scores",user1_Score1)
		console.log("params",params)

		// console.log("getId",document.getElementById("user1_score1").value)

		axios.post("http://localhost:8081/insertresult",{params})
		.then(data => {
			console.log(data)})
		.catch(err=>console.log("error",err))
	}

	var matchPrint = "";
	matchPrint = matchData.map( (item,index) => {
		if(item.user1_email === email || item.user2_email === email){
			return(
				<li className="matchList" key={index}>
					<h1><b>{item.date.split('T')[0]}, {item.time}</b></h1>
					<div className="matchContainer">
						<div className="userContainer">
							<div>{item.user1_email}</div>
							<div>rating: {item.user1_rating}</div>
							<h3 className="scoreTitle">Scores</h3>
							<ul>
								<li className='scoreContainer'>
									<label for="score1">Round1 : </label>
									<input 
										type="number" 
										name="user1_score1" 
										id="user1_score1"
							            onChange={ev => setUser1_Score1(ev.target.value)}
									/>
								</li>
								<li className='scoreContainer'>
									<label for="score2">Round2 : </label>
									<input 
										type="number" 
										name="user1_score2" 
										id="user1_score2"
										onChange={ev => setUser1_Score2(ev.target.value)}

									/>
								</li>
								<li className='scoreContainer'>
									<label for="score3">Round3 : </label>
									<input 
										type="number" 
										name="user1_score3" 
										id="user1_score3"
										onChange={ev => setUser1_Score3(ev.target.value)}
			          
									/>
								</li>			
							</ul>
						</div>
						<div className="versus">
							<div>VS</div>
						</div>
						<div className="userContainer">
							<div>{item.user2_email}</div>
							<div>rating: {item.user2_rating}</div>
							<h3 className="scoreTitle">Scores</h3>
							<ul>
								<li className='scoreContainer'>
									<label for="score1">Round1 : </label>
									<input 
										type="number" 
										name="user2_score1" 
										id="user2_score1"							            
										onChange={ev => setUser2_Score1(ev.target.value)}										
									/>
								</li>
								<li className='scoreContainer'>
									<label for="score2">Round2 : </label>
									<input 
										type="number" 
										name="user2_score2" 
										id="user2_score2"
							            onChange={ev => setUser2_Score2(ev.target.value)}	
									/>
								</li>
								<li className='scoreContainer'>
									<label for="score3">Round3 : </label>
									<input 
										type="number" 
										name="user2_score3" 
										id="user2_score3"
							            onChange={ev => setUser2_Score3(ev.target.value)}	
									/>
								</li>			
							</ul>
						</div>
						<div className="errorLabel">{errorMsg}</div>
						<input
         					className={"inputButton"}
         					type="button"
         					onClick={onClickSubmit}	
         					value="Submit Results" 
						/>
					</div>
				</li>
			)
		} else {
			return (<li key={index}></li>)
		}
	})

	// console.log("scorearray:", user1scores, user2scores)
	return (
		<>{props.loggedIn? <div >
			<ul className="ul">
				{matchPrint}
			</ul>
		  </div> : <div className="matchPage"> Please Log In First</div>}
		</>

	)
}

export default Match;