import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavbarList from './subcomponents/navbar_list';

const Navbar = (props) => {
	const {loggedIn, email} = props
	const [dropdown, setDropdown] = useState(false);

	const onClickLogout = () => {
			localStorage.removeItem("user")
			props.setLoggedIn(false)
			props.setEmail("");
	}
	const onClickDropdown = () => {
		if(!dropdown) setDropdown(true)
		else setDropdown(false)
	}
  return (
    <nav className='nav'>
      <div className='site-title'>
        <Link to="/">RANKERS</Link>
      </div>
	  <div className='dropdownIcon' onClick={onClickDropdown}><FontAwesomeIcon icon={faBars} size="lg"/></div>
	  <NavbarList email={email} loggedIn={loggedIn} onClickLogout={onClickLogout}/>
	  {dropdown?
	  	<div className='dropdownList'>
			<NavbarList email={email} loggedIn={loggedIn} onClickLogout={onClickLogout} dropdown={dropdown}/>
		</div>
	  : null}
    </nav>
  )
}

export default Navbar