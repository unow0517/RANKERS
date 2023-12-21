import React from 'react';
import {useState, useEffect} from 'react';
import moment from 'moment';
import '../App.css';
import Modal from '../subcomponents/findmatch_modal';
import axios from 'axios';

const Findmatch = (props) => {
	const [openModal, setOpenModal] = useState(false);
	const [matchTime, setMatchTime] = useState("");
	const [matchDay, setMatchDay] = useState("");
	const [matchDayIdx, setMatchDayIdx] = useState("");
	const [matchData,setmatchData] = useState([]);
	const email = props.email;

	const params = {
		email: email
	}
	useEffect(() => {
		axios.get("http://localhost:8081/matchinfo",{params})
		.then(data => {
			// console.log("dataaxios",data)
			setmatchData(data.data);
		})
		.catch(err=> console.log(err))
	},[])
	var matchInfo = "";
	console.log(matchData)
	matchInfo = matchData.map( (item,index) =>{
		return(
			<tr key={index}>
				<td>{item.email}</td>
				<td>{item.time}</td>
			</tr>
		)
	})
	return (
		<>
		<ul className='daylist'>
			<li className='listelem'><h2>{moment().format("dddd, MM.DD")}</h2>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("10:00");
					setMatchDay(moment().format("dddd, MM.DD"));
					setMatchDayIdx(moment().format("d"))}} 
					className='time' type="button" value = "10:00"/>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("15:00");
					setMatchDay(moment().format("dddd, MM.DD"));
					setMatchDayIdx(moment().format("d"))}} 
					className='time' type="button" value = "15:00"/>
			</li>
			<li className='listelem'><h2>{moment().add(1,"Day").format("dddd, MM.DD")}</h2>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("10:00");
					setMatchDay(moment().add(1,"Day").format("dddd, MM.DD"));
					setMatchDayIdx(moment().add(1,"Day").format("d"))}} 
					className='time' type="button" value = "10:00"/>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("15:00");
					setMatchDay(moment().add(1,"Day").format("dddd, MM.DD"));
					setMatchDayIdx(moment().add(1,"Day").format("d"))}} 
					className='time' type="button" value = "15:00"/>
			</li>
			<li className='listelem'><h2>{moment().add(2,"Day").format("dddd, MM.DD")}</h2>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("10:00");
					setMatchDay(moment().add(2,"Day").format("dddd, MM.DD"));
					setMatchDayIdx(moment().add(2,"Day").format("d"))}} 
					className='time' type="button" value = "10:00"/>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("15:00")
					setMatchDay(moment().add(2,"Day").format("dddd, MM.DD"));
					setMatchDayIdx(moment().add(2,"Day").format("d"))}} 
					className='time' type="button" value = "15:00"/>
			</li>
			<li className='listelem'><h2>{moment().add(3,"Day").format("dddd, MM.DD")}</h2>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("10:00");
					setMatchDay(moment().add(3,"Day").format("dddd, MM.DD"));
					setMatchDayIdx(moment().add(3,"Day").format("d"))}} 
					className='time' type="button" value = "10:00"/>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("15:00")
					setMatchDay(moment().add(3,"Day").format("dddd, MM.DD"));
					setMatchDayIdx(moment().add(3,"Day").format("d"))}} 
					className='time' type="button" value = "15:00"/>
			</li>
			<li className='listelem'><h2>{moment().add(4,"Day").format("dddd, MM.DD")}</h2>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("10:00");
					setMatchDay(moment().add(4,"Day").format("dddd, MM.DD"));
					setMatchDayIdx(moment().add(4,"Day").format("d"))}}  
					className='time' type="button" value = "10:00"/>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("15:00");
					setMatchDay(moment().add(4,"Day").format("dddd, MM.DD"));
					setMatchDayIdx(moment().add(4,"Day").format("d"))}} 
					className='time' type="button" value = "15:00"/>
			</li>
			<li className='listelem'><h2>{moment().add(5,"Day").format("dddd, MM.DD")}</h2>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("10:00");
					setMatchDay(moment().add(5,"Day").format("dddd, MM.DD"));
					setMatchDayIdx(moment().add(5,"Day").format("d"))}}  
					className='time' type="button" value = "10:00"/>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("15:00");
					setMatchDay(moment().add(5,"Day").format("dddd, MM.DD"));
					setMatchDayIdx(moment().add(5,"Day").format("d"))}}  
					className='time' type="button" value = "15:00"/>
			</li>
			<li className='listelem'><h2>{moment().add(6,"Day").format("dddd, MM.DD")}</h2>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("10:00");
					setMatchDay(moment().add(6,"Day").format("dddd, MM.DD"));
					setMatchDayIdx(moment().add(6,"Day").format("d"))}} 
					className='time' type="button" value = "10:00"/>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("15:00");
					setMatchDay(moment().add(6,"Day").format("dddd, MM.DD"));
					setMatchDayIdx(moment().add(6,"Day").format("d"))}} 
					className='time' type="button" value = "15:00"/>
			</li>		
		</ul>
		{openModal && <Modal closeModal={setOpenModal} matchTime={matchTime} matchDay={matchDay} matchDayIdx={matchDayIdx} email={props.email}/>}
		<div>
			<h1>Queue Status</h1>
			<table>
				<thead>
				<tr>
					<th>EMAIL</th>
					<th>TIME</th>
				</tr >
				</thead>
				<tbody>
					{matchInfo}
				</tbody>
			</table>
		</div>
		<div>
			<h1>Match Status</h1>
		</div>
		</>
	)
}

export default Findmatch
