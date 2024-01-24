import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Leaderboard = () => {
	const [users,setUsers] = useState([]);

	useEffect(()=>{
		axios.get("http://localhost:8081/api/leaderboard")
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
			<div className='tierList'>
				<div className='grandmaster'>Grandmaster</div>
				<div className='master'>Master</div>
				<div className='diamond'>Diamond</div>
				<div className='platinum'>Platinum</div>
				<div className='gold'>Gold</div>
				<div className='silver'>Silver</div>
				<div className='bronze'>Bronze</div>
				<div className='unranked'>Unranked</div>
			</div>
			<div className='tableContainer'>
				<table className="leaderboardtable">
					<thead>
						<tr>
							<th className="header">EMAIL</th>
							<th className="header">WIN</th>
							<th className="header">LOSE</th>
							<th className="header">RATING</th>
						</tr>
					</thead>
					<tbody>
						{boardcontent}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default Leaderboard;