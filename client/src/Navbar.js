import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = (props) => {
	const {loggedIn, email} = props
    const navigate = useNavigate();
	const onClickLogout = () => {
			localStorage.removeItem("user")
			props.setLoggedIn(false)
	}
  return (
    <nav className='nav'>
      <div className='site-title'>
        <Link to="/">RANKERS</Link>
      </div>
	  <ul>
		<li>
			<Link to='/findmatch'>Find Match</Link>
		</li>
		<li>
			<Link to='/match'>My Match</Link>
		</li>
	  </ul>
      <ul>
		<Link>Welcome {email}!</Link>
        {loggedIn ? <li>
          <Link to='/profile'>Profile</Link>
        </li>: <li/>}
        <li>
          <Link to='/about'>About</Link>
        </li>
		{loggedIn ? <li>
			<Link to='/' onClick={onClickLogout}>Logout</Link>
        </li>: <li/>}
      </ul>
    </nav>
  )
}

export default Navbar