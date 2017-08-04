import React from 'react';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <div className="column search-area">
            <input
              type="text"
              placeholder="Search Fancy"
              className="search-bar"
            />
          </div>
          <div className="column text-center logo-area">
            <h4>FANCY</h4>
          </div>
          <div className="column nav-area">
            <ul className="nav-right">
              <li><a href=""><i className="fa fa-shopping-cart" /></a></li>
              <li><a href=""><i className="fa fa-envelope" /></a></li>
              <li><a href=""><i className="fa fa-bolt" /></a></li>
              <li><a href=""><i className="fa fa-user" /> You</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
