import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
  <header class="header">
    <a href="#" class="logo"> <i class="fa fa-cubes"></i> <strong>AEMS</strong> </a>
    <nav class="navbar">
        <NavLink to="/">home</NavLink>
        <NavLink to="/events">events </NavLink>
        <NavLink to="/register">register</NavLink>
    </nav>
    <div id="menu-btn" class="fas fa-bars"></div>
  </header>
    )
}

export default Navbar
