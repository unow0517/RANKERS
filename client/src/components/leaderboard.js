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
			<td className="column">{item.email}</td>
			<td className="column">{item.win}</td>
			<td className="column">{item.lose}</td>
			<td className="column">{item.rating}</td>
		  </tr>
		)
	})
	return (
		<div className='tableContainer'>
			<table className="leaderboardtable">
				<thead>
					<tr>
						<th className="column header">EMAIL</th>
						<th className="column header">WIN</th>
						<th className="column header">LOSE</th>
						<th className="column header">RATING</th>
					</tr>
				</thead>
				<tbody>
					{boardcontent}
				</tbody>
			</table>
		</div>
	)
}

export default Leaderboard;