import React, {useEffect, useState} from 'react';
import "../App.css"

const Matchsingle = (item,index,props) => {
	const email = props.email;
	const setUser1_Score1=props.setUser1_Score1;
	const setUser1_Score2=props.setUser1_Score2;
	const setUser1_Score3=props.setUser1_Score3;
	const setUser2_Score1=props.setUser2_Score1;
	const setUser2_Score2=props.setUser2_Score2;
	const setUser2_Score3=props.setUser2_Score3;
	const setUser1Email=props.setUser1Email;
	const setUser2Email=props.setUser2Email;
	const setDate=props.setDate;
	const setTime=props.setTime;
	const errorMsg=props.errorMsg
	const onClickSubmit=props.onClickSubmit
	const [submitted, setSubmitted] = useState(false);

	console.log(item.user1_email)
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
								<label htmlFor="score1">Round1 : </label>
								<input 
									type="number" 
									name="user1_score1" 
									id="user1_score1"
						            onChange={ev => setUser1_Score1(ev.target.value)}
								/>
							</li>
							<li className='scoreContainer'>
								<label htmlFor="score2">Round2 : </label>
								<input 
									type="number" 
									name="user1_score2" 
									id="user1_score2"
									onChange={ev => setUser1_Score2(ev.target.value)}
								/>
							</li>
							<li className='scoreContainer'>
								<label htmlFor="score3">Round3 : </label>
								<input 
									type="number" 
									name="user1_score3" 
									id="user1_score3"
									onChange={ev => {
										setUser1_Score3(ev.target.value)
									}}          
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
								<label htmlFor="score1">Round1 : </label>
								<input 
									type="number" 
									name="user2_score1" 
									id="user2_score1"							            
									onChange={ev => setUser2_Score1(ev.target.value)}										
								/>
							</li>
							<li className='scoreContainer'>
								<label htmlFor="score2">Round2 : </label>
								<input 
									type="number" 
									name="user2_score2" 
									id="user2_score2"
						            onChange={ev => setUser2_Score2(ev.target.value)}	
								/>
							</li>
							<li className='scoreContainer'>
								<label htmlFor="score3">Round3 : </label>
								<input 
									type="number" 
									name="user2_score3" 
									id="user2_score3"
						            onChange={ev => {
										setUser2_Score3(ev.target.value)
										setUser1Email(item.user1_email)
										setUser2Email(item.user2_email)
										setDate(item.date.split('T')[0])
										setTime(item.time)}}
								/>
							</li>			
						</ul>
					</div>
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
			</li>
		)
	} else {
		return (<li key={index}></li>)
	}
}

export default Matchsingle;