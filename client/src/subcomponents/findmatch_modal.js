import React from 'react';
import "../App.css";
// import {useState} from 'react';
// import { useNavigate } from "react-router-dom";


function Modal(props){
	const matchTime = props.matchTime;
	const matchDayIdx = props.matchDayIdx;
	const matchDate = props.matchDate;
	const email = props.email;
	// const [matched ,setMatched] = useState(false);
	// const matched = false;
	// console.log("mD",matchDate);
	// const navigate = useNavigate();
	const onClickOk = () => {
		fetch(process.env.REACT_APP_HOST + "/api/matchqueue",{
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({matchTime, matchDayIdx, email, matchDate}),    
		})
		.then(r=>r.json())
		.then(r=>{
			if('Success' === r) {
				window.alert("You join the match queue successfully!");
				props.closeModal(false);
				// window.location.reload() //refresh the page
			} else {
				console.log("r:", r)
			}
		})
		window.location.reload();
	}
	// console.log(matched);
	return (
		<div className = "modalBackground">
			<div className="modalContainer">
				<div className="titleCloseBtn">
					<button onClick={()=>props.closeModal(false)}>X</button>
				</div>
				<div className="title">
					<h1>You want to book on {matchTime},{matchDate}?</h1>
				</div>
				<div className="body">
					<p>You will be queued in matching list</p>
				</div>
				<div className="footer">
					<button onClick={onClickOk}>Okay, let's go!</button>
					<button onClick={()=>props.closeModal(false)} id="cancelBtn">Cancel</button>
				</div>
			</div>
		</div>
	);
}

export default Modal;