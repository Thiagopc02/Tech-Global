import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="TECH GLOBAL logo" className="logo" />
      <nav>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#features">Recursos</a></li>
          <li><a href="#gallery">Galeria</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
