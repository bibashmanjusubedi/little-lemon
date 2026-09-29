import React from 'react';
import Nav from './Nav';
import logo from '../assets/Logo .svg';

function Header() {
  return (
    <div className="container">
      <header>
        <img src={logo} alt="Little Lemon Logo" className="logo" />
        <Nav />
      </header>
    </div>
  );
}

export default Header;