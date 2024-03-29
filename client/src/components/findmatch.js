import React from 'react';
import {useState, useEffect } from 'react';
import moment from 'moment';
import '../App.css';
import Modal from '../subcomponents/findmatch_modal';
import axios from 'axios';
import Timeslot from '../subcomponents/timeslot'
import Queuestatus from '../subcomponents/findmatch_queuestatus'
import Matchstatus from '../subcomponents/findmatch_matchstatus.js'


const Findmatch = (props) => {
	const {loggedIn} = props;
	const [openModal, setOpenModal] = useState(false);
	const [matchTime, setMatchTime] = useState("");
	const [matchDate, setMatchDate] = useState("");
	const [matchDayIdx, setMatchDayIdx] = useState("");
	const [queueData,setQueueData] = useState([]);
	const matchData = props.matchData;
	
	// console.log("MatchData", matchData)
	// console.log("QueueDatea", queueData)
	var email = '';
	
	if(localStorage.getItem("user")){
		email = JSON.parse(localStorage.getItem("user")).email;
	}

	const params = {
		email: email
	}
	useEffect(() => {
		if(loggedIn){
			axios.get(process.env.REACT_APP_HOST + "/api/queueinfo",{params})
			.then(data => {
				console.log("QData",data.data)
				setQueueData(data.data)})
			.catch(err=> console.log(err))}
	},[loggedIn])

	var queueInfo = "";
	queueInfo = queueData.map( (item,index) =>{
		return(
			<Queuestatus item={item} index={index} key={index}/>
		)
	})

	var matchInfo = "";
	matchInfo = matchData.map( (item) => item.date.split('T')[0] + "," + item.time)

	var matchPrint = "";
	matchPrint = matchData.map((item,index) => {
		if(item.user1_email === email || item.user2_email === email){
			return(
				<Matchstatus item={item} index={index} key={index} email={email}/>)
		}
	})
		
	var arr_datetimeFromQ = [];
	for(let i =0; i < queueData.length; i++){
		arr_datetimeFromQ.push(queueData[i].date.split('T')[0] + "," + queueData[i].time)
	}

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
		moment().format("dddd,  MM.DD"),
		moment().add(1,"Day").format("dddd, [\n] MM.DD"),
		moment().add(2,"Day").format("dddd, [\n] MM.DD"),
		moment().add(3,"Day").format("dddd, [\n] MM.DD"),
		moment().add(4,"Day").format("dddd, [\n] MM.DD"),
		moment().add(5,"Day").format("dddd, [\n] MM.DD"),
		moment().add(6,"Day").format("dddd, [\n] MM.DD")
	]


	// console.log("arr_datetimeIncludes", arr_datetimeFromQ.includes(dates[0]+","+times[0]))
	return (
		<>{loggedIn?
			<div className='findMatchContainer'>
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
				<ul className='explanation' >
					<li className='matchReserved'>Match Reserved<br/>(Either Mine or Others)</li>
					<li className='queueBooked'>My Queue<br/>Booked</li>
					<li className='queueAvailable'>My Queue<br/>Avaiable</li>
				</ul>
				{openModal && <Modal closeModal={setOpenModal} matchTime={matchTime} matchDate={matchDate} matchDayIdx={matchDayIdx} email={props.email}/>}
				<div className='status'>	
					<div>
						<h1>Queue Status</h1>
						<table>
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
				</div>
			</div> : <div className='logInFirst'>You are not logged in</div>
			}
		</>
	)
}

export default Findmatch
