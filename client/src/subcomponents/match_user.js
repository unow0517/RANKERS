import React from 'react';
import "../App.css"

const Matchuser = (props) => {
	const item = props.item;
	
	// console.log("EMAIL",props.user_email)
	return (
		<div className="userContainer">
			<div>{props.user_email}</div>
			<div>rating: {props.user_rating}</div>
			<h3 className="scoreTitle">Scores</h3>
			<ul>
				<li className='scoreContainer'>
					<label htmlFor="score1">Round1 : </label>
					<input 
						type="number" 
						name="user1_score1" 
						id="user1_score1"
						onChange={ev => props.setUser_Score1(ev.target.value)}
					/>
				</li>
				<li className='scoreContainer'>
					<label htmlFor="score2">Round2 : </label>
					<input 
						type="number" 
						name="user1_score2" 
						id="user1_score2"
						onChange={ev => props.setUser_Score2(ev.target.value)}
					/>
				</li>
				<li className='scoreContainer'>
					<label htmlFor="score3">Round3 : </label>
					<input 
						type="number" 
						name="user1_score3" 
						id="user1_score3"
						onChange={ev => {
							props.setUser_Score3(ev.target.value)
							props.setUserEmail(props.user_email) 
							if(props.setDate) props.setDate(item.date.split('T')[0])
							if(props.setTime) props.setTime(item.time)
						}}          
					/>
				</li>			
			</ul>
		</div>
	)
}

export default Matchuser;