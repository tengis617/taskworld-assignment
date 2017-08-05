import React from 'react';

import './FormElements.css';

export function RadioButton({ onChange, name, options, checkedValue, icon }) {
  const radioList = options.map(opt => (
    <label className="radio-label">
      <input
        type="radio"
        name={name}
        value={opt}
        onClick={onChange}
        checked={checkedValue === opt}
      /> {opt}
    </label>
  ));
  return (
    <div>
      {radioList}
    </div>
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
