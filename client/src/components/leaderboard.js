import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Leaderboard = () => {
	const [users,setUsers] = useState([]);

	useEffect(()=>{
		axios.get("http://localhost:8081/leaderboard")
		.then(data => {
			console.log("leaderboard", data.data);
			setUsers(data.data)
		})
	},[])
	
	var boardcontent = "";

	boardcontent = users.map( (item, index) =>{
		return(
		  <tr key={index}>
			<td>{item.email}</td>
			<td>{item.win}</td>
			<td>{item.lose}</td>
			<td>{item.rating}</td>
		  </tr>
		)
	})
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>EMAIL</th>
						<th>WIN</th>
						<th>LOSE</th>
						<th>RATING</th>
					</tr>
				</thead>
				<tbody>
					{boardcontent}
				</tbody>
			</table>
		</>
	)
}

export default Leaderboard;