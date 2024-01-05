import React from 'react';

const Match = (props) => {
	
	return (
		<>{props.loggedIn? <div>
			<h2>Hello</h2> </div>: <div> Please Log In First</div>
		}
		</>

	)
}

export default Match;