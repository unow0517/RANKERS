import React from 'react';
import {useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = (props) => {
	const {setLoggedIn, loggedIn, setEmail} = props;
	const [stat, setStat] = useState([]);
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

	// console.log("EMAIL", email)
	const params = {
		email: email
	}
	
	console.log("Lin",loggedIn)
	
	useEffect(()=>{
		if(loggedIn){
			axios.get("http://" + process.env.REACT_APP_HOST + "/api/stats",{params})
			.then(data => {
			// console.log("statData", data.data[0]);
			setStat(data.data[0])})
			.catch(err => console.log(err))}
	},[loggedIn])

	return(
		<> {loggedIn? <div className='profileContainer'>
				<h2>{stat.email}</h2>
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