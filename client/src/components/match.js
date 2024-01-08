import React, {useEffect, useState} from 'react';
import "../App.css"
import axios from 'axios';
import Matchsingle from '../subcomponents/match_single';

const Match = (props) => {
	const [email, setEmail] = useState("");
	const matchData = props.matchData;
	
	if(localStorage.getItem("user") && email === ""){
		setEmail(JSON.parse(localStorage.getItem("user")).email)
	}

	var matchPrint = "";
	// console.log("MatchData",matchData)
	matchPrint = matchData.toReversed().map( (item,index) => {
		if(item.user1_email === email || item.user2_email === email){
			return(<li key={index} className='matchList'><Matchsingle 
				item = {item} 
				email={email} 
				/>
			</li>)
	} else {
		return (<li key={index}></li>)
	}
	})

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