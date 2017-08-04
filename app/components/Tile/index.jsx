import React from 'react';

import './Tile.css';

export default function Tile({header, children}) {
  return (
    <div className="tile">
      {header ? <h2 className="tile-head">{header}</h2> : null }
      {children}
    </div>
  );
}
