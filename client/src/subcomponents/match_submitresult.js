import React from 'react';

const Submitresult = (props) => {
	return (
		<div>
			<h3 className="scoreTitle">Scores</h3>
			<ul>
				<li className='scoreContainer'>
					<label for="score1">Round1 : </label>
					<input type="number" name="score1" id="score1"/>
				</li>
				<li className='scoreContainer'>
					<label for="score2">Round2 : </label>
					<input type="number" name="score2" id="score2"/>
				</li>
				<li className='scoreContainer'>
					<label for="score3">Round3 : </label>
					<input type="number" name="score3" id="score3"/>
				</li>			
			</ul>
			<ul>
				<li className='scoreContainer'>
					<label for="score1">Round1 : </label>
					<input type="number" name="score1" id="score1"/>
				</li>
				<li className='scoreContainer'>
					<label for="score2">Round2 : </label>
					<input type="number" name="score2" id="score2"/>
				</li>
				<li className='scoreContainer'>
					<label for="score3">Round3 : </label>
					<input type="number" name="score3" id="score3"/>
				</li>			
			</ul>
		</div>
	)
}

export default Submitresult;
