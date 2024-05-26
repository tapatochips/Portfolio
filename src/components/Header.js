import React from 'react';

const Header = () => (
    <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0', position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}>
    <h1>My Portfolio</h1>
    <nav>
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'space-around' }}>
        <li style={{ margin: '0 10px' }}><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
        <li style={{ margin: '0 10px' }}><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
        <li style={{ margin: '0 10px' }}><a href="#portfolio" style={{ color: '#fff', textDecoration: 'none' }}>Portfolio</a></li>
        <li style={{ margin: '0 10px' }}><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
