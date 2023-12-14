import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav'>
      <a href='/' className='site-title'>RANKERS</a>
      <ul>
        <li>
          <a href='/profile'>Profile</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar