import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'resource/img/logo.png';
import './Header.scss';

export default function () {
  return (
    <header id="header" className="site-header">
      <div className="site-header--wrapper">
        <div className="site-header--logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="site-header--left">
          <nav className="menu">
            <ul>
              <li><NavLink exact to="/">Homepage</NavLink></li>
              <li><a href="https://github.com/harmonous/bookstore/">Github</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
