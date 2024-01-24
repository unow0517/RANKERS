import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "../App.css"

const Matchuser = (props) => {
	const item = props.item;
	const [userScores,setUserScores] = useState([]);
	// const userScores = props.userScores;

	useEffect(()=>{
		const params = {
			email: JSON.parse(localStorage.getItem("user")).email,
			date : props.date,
			time : props.time
		}
		if(localStorage.getItem("user")){
			axios.get("http://localhost:8081/api/checkresult", {params})
			.then(data => {
				console.log("checkResultInside",data.data[0])
				if(data.data.length === 1){
					if(props.user_email === data.data[0].loser_email){
						setUserScores([
							data.data[0].loser_score1,
							data.data[0].loser_score2,
							data.data[0].loser_score3])						
					} 
					else if (props.user_email === data.data[0].winner_email){
						console.log("HELLO")
						setUserScores([
							data.data[0].winner_score1,
							data.data[0].winner_score2,
							data.data[0].winner_score3])
						
					}
				}
			})
			.catch(err => console.log("err",err))
		}
	},[])

	// console.log("ITEM",item)

	// console.log("HERE",userScores)
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
						placeholder={userScores?.[0]}
					/>
				</li>
				<li className='scoreContainer'>
					<label htmlFor="score2">Round2 : </label>
					<input 
						type="number" 
						name="user1_score2" 
						id="user1_score2"
						onChange={ev => props.setUser_Score2(ev.target.value)}
						placeholder={userScores?.[1]}

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
						placeholder={userScores?.[2]}
					/>
				</li>			
			</ul>
		</div>
	)
}

export default Matchuser;