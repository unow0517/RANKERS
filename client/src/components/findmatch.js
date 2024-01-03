import React from 'react';
import {useState, useEffect } from 'react';
import moment from 'moment';
import '../App.css';
import Modal from '../subcomponents/findmatch_modal';
import axios from 'axios';



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
	// console.log("matchData",matchData[0].date)
	for(let i =0; i < matchData.length; i++){
		arr_dateFromQueue.push(matchData[i].date.split('T')[0])
		arr_timeFromQueue.push(matchData[i].time)
	}
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

	return (
		<>{loggedIn?
		<div>
		<ul className='daylist'>
			<li className='listelem'><h2>{dayDateMonth[0]}</h2>
				{arr_dateFromQueue.includes(dates[0]) && arr_timeFromQueue.includes(times[0]) ?
					<div>
						<input className='timequeued' type="button" value = {times[0]}/>
					</div> :
					<div>
						<input onClick= {()=>{
								setOpenModal(true); 
								setMatchTime(times[0]);
								setMatchDate(dates[0]);
								setMatchDayIdx(dayIdx[0])}} 
							className='time' type="button" value = {times[0]}
						/>
					</div>
				}
				{arr_dateFromQueue.includes(dates[0]) && arr_timeFromQueue.includes(times[1]) ?
					<div>
						<input className='timequeued' type="button" value = {times[1]}/>
					</div> :
					<div>
						<input onClick= {()=>{
								setOpenModal(true); 
								setMatchTime(times[1]);
								setMatchDate(dates[0]);
								setMatchDayIdx(dayIdx[0])}} 
							className='time' type="button" value = {times[1]}
						/>
					</div>
				}				
			</li>

			<li className='listelem'><h2>{dayDateMonth[1]}</h2>
				{arr_dateFromQueue.includes(dates[1]) && arr_timeFromQueue.includes(times[0]) ?
					<div>
						<input className='timequeued' type="button" value = {times[0]}/>
					</div> :
					<div>
						<input onClick= {()=>{
								setOpenModal(true); 
								setMatchTime(times[0]);
								setMatchDate(dates[1]);
								setMatchDayIdx(dayIdx[1])}} 
							className='time' type="button" value = {times[0]}
						/>
					</div>
				}
				{arr_dateFromQueue.includes(dates[1]) && arr_timeFromQueue.includes(times[1]) ?
					<div>
						<input className='timequeued' type="button" value = {times[1]}/>
					</div> :
					<div>
						<input onClick= {()=>{
								setOpenModal(true); 
								setMatchTime(times[1]);
								setMatchDate(dates[1]);
								setMatchDayIdx(dayIdx[1])}} 
							className='time' type="button" value = {times[1]}
						/>
					</div>
				}						
			</li>

			<li className='listelem'><h2>{dayDateMonth[2]}</h2>
				{arr_dateFromQueue.includes(dates[2]) && arr_timeFromQueue.includes(times[0]) ?
					<div>
						<input className='timequeued' type="button" value = {times[0]}/>
					</div> :
					<div>
						<input onClick= {()=>{
								setOpenModal(true); 
								setMatchTime(times[0]);
								setMatchDate(dates[2]);
								setMatchDayIdx(dayIdx[2])}} 
							className='time' type="button" value = {times[0]}
						/>
					</div>
				}
				{arr_dateFromQueue.includes(dates[2]) && arr_timeFromQueue.includes(times[1]) ?
					<div>
						<input className='timequeued' type="button" value = {times[1]}/>
					</div> :
					<div>
						<input onClick= {()=>{
								setOpenModal(true); 
								setMatchTime(times[1]);
								setMatchDate(dates[2]);
								setMatchDayIdx(dayIdx[2])}} 
							className='time' type="button" value = {times[1]}
						/>
					</div>
				}			
			</li>

			<li className='listelem'><h2>{dayDateMonth[3]}</h2>
				{arr_dateFromQueue.includes(dates[3]) && arr_timeFromQueue.includes(times[0]) ?
					<div>
						<input className='timequeued' type="button" value = {times[0]}/>
					</div> :
					<div>
						<input onClick= {()=>{
								setOpenModal(true); 
								setMatchTime(times[0]);
								setMatchDate(dates[3]);
								setMatchDayIdx(dayIdx[3])}} 
							className='time' type="button" value = {times[0]}
						/>
					</div>
				}
				{arr_dateFromQueue.includes(dates[3]) && arr_timeFromQueue.includes(times[1]) ?
					<div>
						<input className='timequeued' type="button" value = {times[1]}/>
					</div> :
					<div>
						<input onClick= {()=>{
								setOpenModal(true); 
								setMatchTime(times[1]);
								setMatchDate(dates[3]);
								setMatchDayIdx(dayIdx[3])}} 
							className='time' type="button" value = {times[1]}
						/>
					</div>
				}			
			</li>

			<li className='listelem'><h2>{dayDateMonth[4]}</h2>
				{arr_dateFromQueue.includes(dates[4]) && arr_timeFromQueue.includes(times[0]) ?
					<div>
						<input className='timequeued' type="button" value = {times[0]}/>
					</div> :
					<div>
						<input onClick= {()=>{
								setOpenModal(true); 
								setMatchTime(times[0]);
								setMatchDate(dates[4]);
								setMatchDayIdx(dayIdx[4])}} 
							className='time' type="button" value = {times[0]}
						/>
					</div>
				}
				{arr_dateFromQueue.includes(dates[4]) && arr_timeFromQueue.includes(times[1]) ?
					<div>
						<input className='timequeued' type="button" value = {times[1]}/>
					</div> :
					<div>
						<input onClick= {()=>{
								setOpenModal(true); 
								setMatchTime(times[1]);
								setMatchDate(dates[4]);
								setMatchDayIdx(dayIdx[4])}} 
							className='time' type="button" value = {times[1]}
						/>
					</div>
				}			
			</li>

			<li className='listelem'><h2>{dayDateMonth[5]}</h2>
				{arr_dateFromQueue.includes(dates[5]) && arr_timeFromQueue.includes(times[0]) ?
					<div>
						<input className='timequeued' type="button" value = {times[0]}/>
					</div> :
					<div>
						<input onClick= {()=>{
								setOpenModal(true); 
								setMatchTime(times[0]);
								setMatchDate(dates[5]);
								setMatchDayIdx(dayIdx[5])}} 
							className='time' type="button" value = {times[0]}
						/>
					</div>
				}
				{arr_dateFromQueue.includes(dates[5]) && arr_timeFromQueue.includes(times[1]) ?
					<div>
						<input className='timequeued' type="button" value = {times[1]}/>
					</div> :
					<div>
						<input onClick= {()=>{
								setOpenModal(true); 
								setMatchTime(times[1]);
								setMatchDate(dates[5]);
								setMatchDayIdx(dayIdx[5])}} 
							className='time' type="button" value = {times[1]}
						/>
					</div>
				}			
			</li>

			<li className='listelem'><h2>{dayDateMonth[6]}</h2>
				{arr_dateFromQueue.includes(dates[6]) && arr_timeFromQueue.includes(times[0]) ?
					<div>
						<input className='timequeued' type="button" value = {times[0]}/>
					</div> :
					<div>
						<input onClick= {()=>{
								setOpenModal(true); 
								setMatchTime(times[0]);
								setMatchDate(dates[6]);
								setMatchDayIdx(dayIdx[6])}} 
							className='time' type="button" value = {times[0]}
						/>
					</div>
				}
				{arr_dateFromQueue.includes(dates[6]) && arr_timeFromQueue.includes(times[1]) ?
					<div>
						<input className='timequeued' type="button" value = {times[1]}/>
					</div> :
					<div>
						<input onClick= {()=>{
								setOpenModal(true); 
								setMatchTime(times[1]);
								setMatchDate(dates[6]);
								setMatchDayIdx(dayIdx[6])}} 
							className='time' type="button" value = {times[1]}
						/>
					</div>
				}			
			</li>	
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
