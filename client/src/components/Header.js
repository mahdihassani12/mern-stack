import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar">
        <ul className="navbar-lists">
            <li className="nav-item">
                <NavLink to="/" className="nav-link">Posts</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/create" className="nav-link">Create</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Header
