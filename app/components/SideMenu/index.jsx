import React from 'react';
import Tile from '../Tile';

import './SideMenu.css';

export default function SideMenu() {
  return (
    <Tile>
      <div className="menu">
        <dl className="menu-group">
          <li><a href=""><i className="fa fa-user-circle-o" /> Edit Profile</a></li>
          <li><a href="/"><i className="fa fa-file-text-o" /> Preferences</a></li>
          <li><a href=""><i className="fa fa-lock" /> Password</a></li>
          <li><a href=""><i className="fa fa-envelope-o" /> Notifications</a></li>
          <li><a href=""><i className="fa fa-th-large" /> Connected Accounts</a></li>
        </dl>
        <dl className="menu-group">
          <li><a href=""><i className="fa fa-list-alt" /> Orders</a></li>
          <li><a href=""><i className="fa fa-credit-card" /> Payment</a></li>
          <li><a href=""><i className="fa fa-truck" /> Shipping</a></li>
        </dl>
        <dl className="menu-group">
          <li><a href=""><i className="fa fa-handshake-o" /> Credits & Referrals</a></li>
        </dl>
      </div>
    </Tile>
  );
}
