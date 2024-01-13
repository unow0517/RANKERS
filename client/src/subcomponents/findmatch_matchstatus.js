import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import moment from 'moment';

const Matchstatus = (props) => {
	const email = props.email;
	const time = props.item.time;
	const date = props.item.date.split('T')[0];
	const matchId = props.item.uuid;
	const dayIdx = moment(date).format('d')

	const onClickDelete =() => {
		const params ={
			matchId: matchId,
			dayIdx: dayIdx,
			email: email
		}

		if(window.confirm("Are you sure to cancel the match? Penalty will be applied")){
			axios.post("http://localhost:8081/deletematch", params)
			.then(data => {
				console.log("deletDate",data)
				window.alert("Your match is deleted, refresh the page")})
			.catch(err=>console.log(err))
		}
	}
	
	return (
		<tr key={props.index}>
			<td> You have match on <b>{time}, {date}</b></td>
			<td><FontAwesomeIcon icon={faTrash} className="trash" onClick={onClickDelete}/></td>					
		</tr>
	)
}

export default Matchstatus