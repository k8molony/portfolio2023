import './Header.css';
import React from 'react';
import {Link as RouterLink } from 'react-router-dom';

function Header({ logo }) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Katy Molony</h1>
      <nav>
        <RouterLink to='/' className='App-link'>
          About me
        </RouterLink>
        <RouterLink to='/projects' className='App-link'>
          Projects
        </RouterLink>
        <RouterLink to='/contact' className='App-link'>
          Contact
        </RouterLink>
      </nav>
    </header>
  );
}

export default Header;