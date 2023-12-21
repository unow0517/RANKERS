import React from 'react';
import "../App.css";

function Modal(props){
	const matchTime = props.matchTime;
	const matchDayIdx = props.matchDayIdx;
	const matchDay = props.matchDay;
	const email = props.email;
	console.log("idx",matchDayIdx)
	const onClickOk = () => {
		fetch("http://localhost:8081/matchqueue",{
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({matchTime, matchDayIdx, email}),    
		}).
		then(r=>r.json())
		.then(r=>{
			if('Success' === r.message) {
				console.log("match queued successfully")
			} else {
				console.log(r)
			}
		})
	}
	return (
		<div className = "modalBackground">
			<div className="modalContainer">
				<div className="titleCloseBtn">
					<button onClick={()=>props.closeModal(false)}>X</button>
				</div>
				<div className="title">
					<h1>You want to book on {matchTime},{matchDay}?</h1>
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