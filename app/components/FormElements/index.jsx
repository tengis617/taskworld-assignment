import React from 'react';

import './FormElements.css';

export function RadioButton({ onChange, name, options, checkedValue, icon }) {
  const radioList = options.map((opt, i) => (
    <label className="radio-label" key={name + opt.value} htmlFor={name + opt.value}>
      <input
        id={name + opt.value}
        type="radio"
        name={name}
        value={opt.value}
        onClick={onChange}
        checked={checkedValue === opt.value}
      /> {opt.text}
    </label>
  ));
  return (
    <div>
      {radioList}
    </div>
  );
}

export function DropdownList({ onChange, options, checkedValue, name }) {

  const optionList = options.map(opt => (
    <option key={name + opt} value={opt}>{opt}</option>
  ));
  return (
    <select
      className="fancy-select"
      id={name}
      name={name}
      value={checkedValue}
      onChange={onChange}
    >
      {optionList}
    </select>
  );
}
