import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className='nav'>
      <div className='site-title'>
        <Link to="/">RANKERS</Link>
      </div>
      <ul>
        {props.loggedIn ? <li>
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