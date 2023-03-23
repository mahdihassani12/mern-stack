import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar">
        <ul className="navbar-lists">
            <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/" className="nav-link">About</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Header
