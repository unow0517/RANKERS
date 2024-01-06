import React, { useEffect } from 'react';
import "../App.css"

const Usercontainer = (props) => {
	const round1Score = [];
	const round2Score = [];
	const round3Score = [];


	useEffect(()=>{
		props.setUserEmail(props.user_email)
	})

	return (
		<div className="userContainer">
			<div>{props.user_email}</div>
			<div>rating: {props.user_rating}</div>
			<h3 className="scoreTitle">Scores</h3>
			<ul>
				<li className='scoreContainer'>
					<label for="score1">Round1 : </label>
					<input 
						type="number" 
						name="score1" 
						id="score1"
						onChange={ev => round1Score.push(ev.target.value)}
					/>
				</li>
				<li className='scoreContainer'>
					<label for="score2">Round2 : </label>
					<input 
						type="number" 
						name="score2" 
						id="score2"
						onChange={ev => round2Score.push(ev.target.value)}
					/>
				</li>
				<li className='scoreContainer'>
					<label for="score3">Round3 : </label>
					<input 
						type="number" 
						name="score3" 
						id="score3"
						onChange ={ev => round3Score.push(ev.target.value)}
					/>
				</li>			
			</ul>
		</div>

	)
}

export default Usercontainer;