import React from 'react';
// import {useState} from 'react';


const Timeslot = (props) => {
	const dayDateMonth = props.dayDateMonth;
	const dates = props.dates;
	const times = props.times;
	const dayIdx = props.dayIdx;
	const ifMatchIncludes = props.matchInfo.includes(dates+","+times[0]);
	console.log("IfmatchIncludes", ifMatchIncludes)


	return (
	<li className='listelem'><h2>{dayDateMonth}</h2>
		{props.matchInfo.includes(dates+","+times[0]) ?
			<div>
				<input className='timematched' type="button" value = {times[0]}/>
			</div> : (props.arr_datetimeFromQ.includes(dates+","+times[0])) ? 
			<div>
				<input className='timequeued' type="button" value = {times[0]}/>
			</div> :
			<div>
				<input onClick= {()=>{
						props.setOpenModal(true); 
						props.setMatchTime(times[0]);
						props.setMatchDate(dates);
						props.setMatchDayIdx(dayIdx)}} 
					className='time' type="button" value = {times[0]}
				/>
			</div>
		}
		{props.matchInfo.includes(dates+","+times[1]) ?
			<div>
				<input className='timematched' type="button" value = {times[1]}/>
			</div> : (props.arr_datetimeFromQ.includes(dates+","+times[1])) ? 
			<div>
				<input className='timequeued' type="button" value = {times[1]}/>
			</div> :
			<div>
				<input onClick= {()=>{
						props.setOpenModal(true); 
						props.setMatchTime(times[1]);
						props.setMatchDate(dates);
						props.setMatchDayIdx(dayIdx)}} 
					className='time' type="button" value = {times[1]}
				/>
			</div>
		}			
	</li>
	)
}

export default Timeslot