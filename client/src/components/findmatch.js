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
	const [matchData,setmatchData] = useState([]);

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
		if(loggedIn){
			axios.get("http://localhost:8081/matchinfo",{params})
			.then(data => {
				// console.log("dataaxios",data)
				setmatchData(data.data)})
			.catch(err=> console.log(err))}
	},[loggedIn])
	var matchInfo = "";
	matchInfo = matchData.map( (item,index) =>{
		return(
			// <tr key={index}>
			// 	<td>{item.email}</td>
			// 	<td>{item.time}</td>
			// 	<td>{item.date.split('T')[0]}</td>
			// </tr>
			<tr key={index}>
			  <td> You booked on <b>{item.time}, {item.date.split('T')[0]}</b></td>
			</tr>
		)
	})
	var arr_dateFromQueue = [];
	var arr_timeFromQueue = [];
	var arr_datetimeFromQ = [];
	console.log("matchData",matchData)
	for(let i =0; i < matchData.length; i++){
		arr_datetimeFromQ.push(matchData[i].date.split('T')[0] + "," + matchData[i].time)
	}
	console.log("arr_datetime", arr_datetimeFromQ)
	// console.log("ar_d",arr_dateFromQueue)
	// console.log("ar_t",arr_timeFromQueue)

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
					{matchInfo}
				</tbody>
			</table>
		</div>
		<div>
			<h1>Match Status</h1>
		</div>
		</div> : <div>You are not logged in</div>
		}
		</>
	)
}

export default Findmatch
