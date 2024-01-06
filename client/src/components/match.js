import React, {useState} from 'react';
import "../App.css"
import Usercontainer from '../subcomponents/match_userContainer'
import {Link} from "react-router-dom";

const Match = (props) => {
	const [user1Email, setUser1Email] = useState("");
	const [user2Email, setUser2Email] = useState("");
	const [user1scores, setUser1Scores] = useState([]);
	const [user2scores, setUser2Scores] = useState([])

	const matchData = props.matchData;
	var email = '';
	if(localStorage.getItem("user")){
		email = JSON.parse(localStorage.getItem("user")).email;
	}
	console.log("matchData",matchData)

	const onClickSubmit = () => {
		console.log("Click", user1Email)
	}
	var matchPrint = "";
	matchPrint = matchData.map( (item,index) => {
		if(item.user1_email === email || item.user2_email === email){
			return(
				<li className="matchList" key={index}>
					<h1><b>{item.date.split('T')[0]}, {item.time}</b></h1>
					<div className="matchContainer">
						<Usercontainer 
							user_email={item.user1_email} 
							user_rating={item.user1_rating}
							setUserEmail={setUser1Email}
							scores={setUser1Scores}
						/>
						<div className="versus">
							<div>VS</div>
						</div>
						<Usercontainer 
							user_email={item.user2_email}
							user_rating={item.user2_rating}
							setUserEmail={setUser2Email}
							scores={setUser2Scores}
						/>
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