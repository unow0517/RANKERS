import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import moment from 'moment';

const Queuestatus = (props) => {
	const time = props.item.time;
	const date = props.item.date.split('T')[0];
	const queueId = props.item.id;
	const dayIdx = moment(date).format('d')

	const onClickDelete =() => {
		const params ={
			queueId: queueId,
			dayIdx: dayIdx
		}
		if(window.confirm("Are you sure to delete the queue?")){
			axios.post("http://localhost:8081/api/deletequeue", params)
			.then(data => {
				console.log("deletDate",data)
				window.alert("Your queue is deleted, refresh the page")})
			.catch(err=>console.log(err))
		}
		window.location.reload();
	}

	return (
		<tr key={props.index}>
			<td> You booked on <b>{time}, {date}</b></td>
			<td><FontAwesomeIcon icon={faTrash} className="trash" onClick={onClickDelete}/></td>
	  	</tr>
	)
}

export default Queuestatus