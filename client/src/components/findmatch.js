import React from 'react';
import {useState, useEffect } from 'react';
import moment from 'moment';
import '../App.css';
import Modal from '../subcomponents/findmatch_modal';
import axios from 'axios';
import Timeslot from '../subcomponents/timeslot'

const Findmatch = (props) => {
	const {loggedIn} = props;
	const [openModal, setOpenModal] = useState(false);
	const [matchTime, setMatchTime] = useState("");
	const [matchDate, setMatchDate] = useState("");
	const [matchDayIdx, setMatchDayIdx] = useState("");
	const [queueData,setQueueData] = useState([]);
	const matchData = props.matchData;
	// const [matchData,setMatchData] = useState([]);
	console.log("MatchData", matchData)
	var email = '';
	
	if(localStorage.getItem("user")){
		email = JSON.parse(localStorage.getItem("user")).email;
	}

	// console.log("emailFront",email);
	const params = {
		email: email
	}
	// console.log("paramsfront",params);
	useEffect(() => {
		// console.log("UseEfect")
		if(loggedIn){
			axios.get("http://localhost:8081/queueinfo",{params})
			.then(data => {
				console.log("QData",data.data)
				setQueueData(data.data)})
			.catch(err=> console.log(err))}
		
			// axios.get("http://localhost:8081/matchinfo")
			// .then((data) => {
			// 	// console.log("matchInfodata",data.data)
			// 	setMatchData(data.data)})
	},[loggedIn])

	var queueInfo = "";
	queueInfo = queueData.map( (item,index) =>{
		return(
			<tr key={index}>
			  <td> You booked on <b>{item.time}, {item.date.split('T')[0]}</b></td>
			</tr>
		)
	})

	console.log("MD", queueInfo)
	var matchInfo = "";
	matchInfo = matchData.map( (item) => item.date.split('T')[0] + "," + item.time)

	console.log("matchData",matchData)
	var matchPrint = "";
	matchPrint = matchData.map( (item,index) => {
		if(item.user1_email === email || item.user2_email === email){
			return(
				<tr key={index}>
					<td> You have match on <b>{item.time}, {item.date.split('T')[0]}</b></td>
				</tr>
			)
		} else {
			return (<tr key={index}></tr>)
		}
	})
		
	// console.log("queueInfo", queueInfo)
	var arr_datetimeFromQ = [];
	// console.log("queueData",queueData)
	// console.log("matchData",matchInfo)

	for(let i =0; i < queueData.length; i++){
		arr_datetimeFromQ.push(queueData[i].date.split('T')[0] + "," + queueData[i].time)
	}
	// console.log("arr_datetime", arr_datetimeFromQ)
	// console.log("ar_d",arr_dateFromQueue)
	// console.log("ar_t",arr_timeFromQueue)

	// timeSlots.forEach(())
	// console.log("timeSlot", timeSlots)
	const dates = [
		moment().format("YYYY-MM-DD"),
		moment().add(1,"Day").format("YYYY-MM-DD"),
		moment().add(2,"Day").format("YYYY-MM-DD"),
		moment().add(3,"Day").format("YYYY-MM-DD"),
		moment().add(4,"Day").format("YYYY-MM-DD"),
		moment().add(5,"Day").format("YYYY-MM-DD"),
		moment().add(6,"Day").format("YYYY-MM-DD"),
	]
	const times = [
		"10:00",
		"15:00"
	]
	const dayIdx = [
		moment().format("d"),
		moment().add(1,"Day").format("d"),
		moment().add(2,"Day").format("d"),
		moment().add(3,"Day").format("d"),
		moment().add(4,"Day").format("d"),
		moment().add(5,"Day").format("d"),
		moment().add(6,"Day").format("d"),
	]

	const dayDateMonth = [
		moment().format("dddd, MM.DD"),
		moment().add(1,"Day").format("dddd, MM.DD"),
		moment().add(2,"Day").format("dddd, MM.DD"),
		moment().add(3,"Day").format("dddd, MM.DD"),
		moment().add(4,"Day").format("dddd, MM.DD"),
		moment().add(5,"Day").format("dddd, MM.DD"),
		moment().add(6,"Day").format("dddd, MM.DD")
	]


	// console.log("arr_datetimeIncludes", arr_datetimeFromQ.includes(dates[0]+","+times[0]))
	return (
		<>{loggedIn?
		<div>
		<ul className='daylist'>
			{/* Map doesn't work with Queue status */}
			{/* {timeSlots}
			{[...new Array(7)].map((_, index) => (
				<Timeslot
					key={index}
					dayDateMonth={dayDateMonth[index]} 
					dates={dates[index]} 
					times={times}
					dayIdx={dayIdx[index]} 
					setOpenModal={setOpenModal}
					setMatchTime={setMatchTime}
					setMatchDate={setMatchDate}
					setMatchDayIdx={setMatchDayIdx} 
					arr_datetimeFromQ={arr_datetimeFromQ}
				/>
			))} */}
			<Timeslot 
				dayDateMonth={dayDateMonth[0]} 
				dates={dates[0]} 
				times={times}
				dayIdx={dayIdx[0]} 
				setOpenModal={setOpenModal}
				setMatchTime={setMatchTime}
				setMatchDate={setMatchDate}
				setMatchDayIdx={setMatchDayIdx} 
				arr_datetimeFromQ={arr_datetimeFromQ}
				matchInfo={matchInfo}
			/>
			<Timeslot 
				dayDateMonth={dayDateMonth[1]} 
				dates={dates[1]} 
				times={times}
				dayIdx={dayIdx[1]} 
				setOpenModal={setOpenModal} 
				setMatchTime={setMatchTime}
				setMatchDate={setMatchDate}
				setMatchDayIdx={setMatchDayIdx} 
				arr_datetimeFromQ={arr_datetimeFromQ}
				matchInfo={matchInfo}
			/>
			<Timeslot 
				dayDateMonth={dayDateMonth[2]} 
				dates={dates[2]} 
				times={times}
				dayIdx={dayIdx[2]} 
				setOpenModal={setOpenModal} 
				setMatchTime={setMatchTime}
				setMatchDate={setMatchDate}
				setMatchDayIdx={setMatchDayIdx} 
				arr_datetimeFromQ={arr_datetimeFromQ}
				matchInfo={matchInfo}
			/>
			<Timeslot 
				dayDateMonth={dayDateMonth[3]} 
				dates={dates[3]} 
				times={times}
				dayIdx={dayIdx[3]} 
				setOpenModal={setOpenModal} 
				setMatchTime={setMatchTime}
				setMatchDate={setMatchDate}
				setMatchDayIdx={setMatchDayIdx} 
				arr_datetimeFromQ={arr_datetimeFromQ}
				matchInfo={matchInfo}
			/>
			<Timeslot 
				dayDateMonth={dayDateMonth[4]} 
				dates={dates[4]} 
				times={times}
				dayIdx={dayIdx[4]} 
				setOpenModal={setOpenModal} 
				setMatchTime={setMatchTime}
				setMatchDate={setMatchDate}
				setMatchDayIdx={setMatchDayIdx} 
				arr_datetimeFromQ={arr_datetimeFromQ}
				matchInfo={matchInfo}
			/>
			<Timeslot 
				dayDateMonth={dayDateMonth[5]} 
				dates={dates[5]} 
				times={times}
				dayIdx={dayIdx[5]} 
				setOpenModal={setOpenModal} 
				setMatchTime={setMatchTime}
				setMatchDate={setMatchDate}
				setMatchDayIdx={setMatchDayIdx} 
				arr_datetimeFromQ={arr_datetimeFromQ}
				matchInfo={matchInfo}
			/>
			<Timeslot 
				dayDateMonth={dayDateMonth[6]} 
				dates={dates[6]} 
				times={times}
				dayIdx={dayIdx[6]} 
				setOpenModal={setOpenModal} 
				setMatchTime={setMatchTime}
				setMatchDate={setMatchDate}
				setMatchDayIdx={setMatchDayIdx} 
				arr_datetimeFromQ={arr_datetimeFromQ}
				matchInfo={matchInfo}
			/>									
		</ul>
		{openModal && <Modal closeModal={setOpenModal} matchTime={matchTime} matchDate={matchDate} matchDayIdx={matchDayIdx} email={props.email}/>}
		<div>
			<h1>Queue Status</h1>
			<table>
				{/* <thead>
				<tr>
					<th>EMAIL</th>
					<th>TIME</th>
					<th>DATE</th>
				</tr >
				</thead> */}
				<tbody>
					{queueInfo}
				</tbody>
			</table>
		</div>
		<div>
			<h1>Match Status</h1>
			<table>
				<tbody>
					{matchPrint}
				</tbody>
			</table>
		</div>
		</div> : <div>You are not logged in</div>
		}
		</>
	)
}

export default Findmatch
