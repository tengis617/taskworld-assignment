import React from 'react';

import './Section.css';

export default function Section(p) {
  return (
    <div className="section">
      <div className="row">
        <div className="column column-25">
          <h3 className="section-header">
            {p.header}
          </h3>
        </div>
        <div className="column column-75">
          {p.children}
        </div>
      </div>
    </div>
  );
}
