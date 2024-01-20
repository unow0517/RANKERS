import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const NavbarList = (props) => {
	const {email, loggedIn, onClickLogout, dropdown} = props;
	return ( <>
		<ul className={dropdown? 'showDropdown':'toDropdown'}>
			<li>
				<Link to='/findmatch'>Find Match</Link>
			</li>
			<li>
				<Link to='/match'>My Match</Link>
			</li>
			<li>
				<Link to='/leaderboard'>Leaderboard</Link>
			</li>		
	  	</ul>
      	<ul className={dropdown? 'showDropdown':'toDropdown'}>
			<li className='welcome'>
				<Link>Welcome {email}!</Link>
			</li>
        	{loggedIn ? <li>
        	  	<Link to='/profile'>Profile</Link>
        	</li>: <li/>}
        	<li>
        	  	<Link to='/about'>About</Link>
        	</li>
			{loggedIn ? <li>
				<Link to='/' className='navbarLogout' onClick={onClickLogout}>Logout</Link>
        	</li>: <li/>}
      	</ul> 
	  </>)	
}

export default NavbarList;