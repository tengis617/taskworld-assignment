import React from 'react';

import './Section.css';

export default function Section(p) {
  return (
    <div className="section">
      <div className="row">
        <div className="three columns">
          <h2 className="section-header">
            {p.header}
          </h2>
        </div>
        <div className="nine columns">
          {p.children}
        </div>
      </div>
    </div>
  );
}
