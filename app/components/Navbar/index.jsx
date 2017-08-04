import React from 'react';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <div className="column column-33 search-area">
            <input
              type="text"
              placeholder="Search Fancy"
              className="search-bar"
            />
          </div>
          <div className="column column-33 text-center logo-area">
            <h4>FANCY</h4>
          </div>
        </div>
      </div>
    </nav>
  );
}
