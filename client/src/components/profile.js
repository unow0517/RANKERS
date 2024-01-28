import React from 'react';
import {useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = (props) => {
	const {setLoggedIn, loggedIn, setEmail} = props;
	const [stat, setStat] = useState([]);
	const [rank, setRank] = useState("Unranked")
	const navigate = useNavigate();
	
	const onClickLogout = () => {
		localStorage.removeItem("user")
		setLoggedIn(false);
		setEmail("");
		navigate('/');

	}

	var email =''; 
	if(localStorage.getItem("user"))
		email = JSON.parse(localStorage.getItem("user")).email;

	// // console.log("EMAIL", email)
	// const params = {
	// 	email: email
	// }
	
	console.log("Lin",loggedIn)
	
	useEffect(()=>{
		if(loggedIn){
			axios.get(process.env.REACT_APP_HOST + "/api/leaderboard")
			.then(data => {
			console.log("statData", data.data);
			for(let i = 0; i < data.data.length; i++){
				if(data.data[i].email === email)
					if(i === 1){
						setRank("Grandmaster")
					}else if(i >= 2 && i <= 4){
						setRank("Master")
					}else if(i >= 5 && i <= 9){
						setRank("Diamond")
					}else if(i >= 10 && i <= 16){
						setRank("Platinum")
					}else if(i >= 17 && i <= 26){
						setRank("Gold")
					}else if(i >=27 && i <= 39){
						setRank("Silver")
					}else if(i >=40 && i <= 55){
						setRank("Bronze")
					}
					setStat(data.data[i])}
			})
			.catch(err => console.log(err))}
	},[loggedIn])
	console.log(rank)
	return(
		<> {loggedIn? <div className='profileContainer'>
				<h1>{stat.email}</h1>
				<h2>{rank}</h2>
				<ul>
	 				<li className='row'><div className='rowName'>Rating:</div> <div className='rowValue'>{stat.rating}</div></li>
	 				<li className='row'><div className='rowName'>Wins:</div> <div className='rowValue'>{stat.win}</div></li>
	 				<li className='row'><div className='rowName'>Lose:</div> <div className='rowValue'>{stat.lose}</div></li>
	 			</ul>
				<input className = {"logOut"} type="button" onClick ={onClickLogout} value = "Logout"/>
			</div> : <div className='profileContainer'>You are not logged in</div>
			}
		</>
	)
}

export default Profile