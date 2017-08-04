import React from 'react';

import './FormElements.css';

export function RadioButton({ onChange, name, options, checkedValue, icon}) {
  return (
    <div>hello</div>
  );
}

export function DropdownList({ onChange, options, checkedValue, name }) {

  const optionList = options.map((opt) => (
    <option value={opt}>{opt}</option>
  ));
  return (
    <select
      className="fancy-select"
      name={name}
      value={checkedValue}
      onChange={onChange}
    >
      {optionList}
    </select>
  );
}
