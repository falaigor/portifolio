import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <header>
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/cases">Cases</Link></li>
      </ul>
    </header>
  )
}

export default Header
