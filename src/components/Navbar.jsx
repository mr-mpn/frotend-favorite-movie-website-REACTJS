import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Navbar.css";

function Navbar() {
  return (
      <nav className='navbar'>
        <div className='navbar-brand'>
            <Link to='/'>Home Page</Link> | 
            <Link to='/favorites'>Favorites</Link> |
            <Link to='/admin'>Admin</Link> |
        </div>
      </nav>
  )
}

export default Navbar
