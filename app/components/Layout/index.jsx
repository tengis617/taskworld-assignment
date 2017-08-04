import React from 'react';
import Navbar from '../Navbar';

import './Layout.css';

export default function Layout(props) {
  return (
    <div className="content">
      <Navbar />
      {props.children}
    </div>
  );
}
