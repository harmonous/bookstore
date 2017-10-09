import React from 'react';

import './Header.scss';
import logo from 'resource/img/logo.png';

export default function () {
  const MenuDropdown = () => {
    
  };

  return (
    <header id="header" className="site-header">
      <div className="site-header--wrapper">
        <div className="site-header--logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="site-header--left">
          <nav className="menu">
            <ul>
              <li><a>Homepage</a></li>
              <li><a>Products</a></li>
              <li><a>Github</a></li>
            </ul>
          </nav>
        </div>
        <div className="site-header--right">
          <MenuDropdown />
        </div>
      </div>
    </header>
  );
}
