import React from 'react';
import "../App.css"

const Match = (props) => {
	const matchData = props.matchData;
	var email = '';
	if(localStorage.getItem("user")){
		email = JSON.parse(localStorage.getItem("user")).email;
	}
	console.log("matchData",matchData)
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
							<div>
								<label for="score1">Score : </label>
								<input type="number" name="score1" id="score1"/>
							</div>
						</div>
						<div className="versus">
							VS
						</div>
						<div className="userContainer">
							<div>{item.user2_email}</div>
							<div>rating: {item.user2_rating}</div>
							<div>
								<label for="score2">Score : </label>
								<input type="number" name="score2" id="score1"/>
							</div>
						</div>
					</div>
				</li>
			)
		} else {
			return (<li key={index}></li>)
		}
	})

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