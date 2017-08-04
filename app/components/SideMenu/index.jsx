import React from 'react';
import Tile from '../Tile';

import './SideMenu.css';

export default function SideMenu() {
  return (
    <Tile>
      <div className="menu">
        <dl className="menu-group">
          <li><a href="">Edit Profile</a></li>
          <li><a href=""> Preferences</a></li>
          <li><a href="">Password</a></li>
          <li><a href="">Notifications</a></li>
          <li><a href="">Connected Accounts</a></li>
        </dl>
        <dl className="menu-group">
          <li><a href="">Orders</a></li>
          <li><a href="">Payment</a></li>
          <li><a href="">Shipping</a></li>
        </dl>
        <dl className="menu-group">
          <li><a href="">Credits & Referrals</a></li>
        </dl>
      </div>
    </Tile>
  );
}
