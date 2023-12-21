import React from 'react';
import {useState} from 'react';
import moment from 'moment';
import '../App.css';
import Modal from '../subcomponents/findmatch_modal';

const Findmatch = (props) => {
	const [openModal, setOpenModal] = useState(false);
	const [matchTime, setMatchTime] = useState("");
	const [matchDay, setMatchDay] = useState("");
	const [matchDayIdx, setMatchDayIdx] = useState("");
	console.log(matchDayIdx);
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
					setMatchTime("15:00")}} 
					className='time' type="button" value = "15:00"/>
			</li>
			<li className='listelem'><h2>{moment().add(1,"Day").format("dddd, MM.DD")}</h2>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("10:00");
					setMatchDay(moment().add(1,"Day").format("dddd, MM.DD"))}} 
					className='time' type="button" value = "10:00"/>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("15:00")}} 
					className='time' type="button" value = "15:00"/>
			</li>
			<li className='listelem'><h2>{moment().add(2,"Day").format("dddd, MM.DD")}</h2>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("10:00");
					setMatchDay(moment().add(2,"Day").format("dddd, MM.DD"))}} 
					className='time' type="button" value = "10:00"/>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("15:00")}} 
					className='time' type="button" value = "15:00"/>
			</li>
			<li className='listelem'><h2>{moment().add(3,"Day").format("dddd, MM.DD")}</h2>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("10:00");
					setMatchDay(moment().add(3,"Day").format("dddd, MM.DD"))}} 
					className='time' type="button" value = "10:00"/>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("15:00")}} 
					className='time' type="button" value = "15:00"/>
			</li>
			<li className='listelem'><h2>{moment().add(4,"Day").format("dddd, MM.DD")}</h2>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("10:00");
					setMatchDay(moment().add(4,"Day").format("dddd, MM.DD"))}} 
					className='time' type="button" value = "10:00"/>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("15:00")}} 
					className='time' type="button" value = "15:00"/>
			</li>
			<li className='listelem'><h2>{moment().add(5,"Day").format("dddd, MM.DD")}</h2>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("10:00");
					setMatchDay(moment().add(5,"Day").format("dddd, MM.DD"))}} 
					className='time' type="button" value = "10:00"/>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("15:00")}} 
					className='time' type="button" value = "15:00"/>
			</li>
			<li className='listelem'><h2>{moment().add(6,"Day").format("dddd, MM.DD")}</h2>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("10:00");
					setMatchDay(moment().add(6,"Day").format("dddd, MM.DD"))}} 
					className='time' type="button" value = "10:00"/>
				<input onClick= {()=>{
					setOpenModal(true); 
					setMatchTime("15:00")}} 
					className='time' type="button" value = "15:00"/>
			</li>		
		</ul>
		{openModal && <Modal closeModal={setOpenModal} matchTime={matchTime} matchDay={matchDay} matchDayIdx={matchDayIdx} email={props.email}/>}
		</>
	)
}

export default Findmatch
