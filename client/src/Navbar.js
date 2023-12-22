import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	const {loggedIn} = props 
  return (
    <nav className='nav'>
      <div className='site-title'>
        <Link to="/">RANKERS</Link>
      </div>
      <ul>
        {loggedIn ? <li>
          <Link to='/profile'>Profile</Link>
        </li>: <li/>}

        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar