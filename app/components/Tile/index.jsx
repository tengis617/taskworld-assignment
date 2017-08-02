import React from 'react';

import './Tile.css';

export default function Tile(p) {
  return (
    <div className="tile">
      <h2 className="tile-head">{p.header}</h2>
      {p.children}
    </div>
  );
}
