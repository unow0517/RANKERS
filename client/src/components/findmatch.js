import React from 'react';
import moment from 'moment';
import '../App.css';

const Findmatch = () => {

	return (
		<>
		<ul className='daylist'>
			<li className='listelem'><h2>{moment().format("dddd, MM.DD")}</h2>
				<div>10:00</div>
				<div>15:00</div>
			</li>
			<li className='listelem'><h2>{moment().add(1,"Day").format("dddd, MM.DD")}</h2>
				<div>10:00</div>
				<div>15:00</div>
			</li>
			<li className='listelem'><h2>{moment().add(2,"Day").format("dddd, MM.DD")}</h2>
				<div>10:00</div>
				<div>15:00</div>
			</li>
			<li className='listelem'><h2>{moment().add(3,"Day").format("dddd, MM.DD")}</h2>
				<div>10:00</div>
				<div>15:00</div>
			</li>
			<li className='listelem'><h2>{moment().add(4,"Day").format("dddd, MM.DD")}</h2>
				<div>10:00</div>
				<div>15:00</div>
			</li>
			<li className='listelem'><h2>{moment().add(5,"Day").format("dddd, MM.DD")}</h2>
				<div>10:00</div>
				<div>15:00</div>
			</li>
			<li className='listelem'><h2>{moment().add(6,"Day").format("dddd, MM.DD")}</h2>
				<div>10:00</div>
				<div>15:00</div>
			</li>
		</ul>
		</>
	)
}

export default Findmatch
