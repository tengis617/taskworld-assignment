import React from 'react';

export function RadioButton({ onChange, name, options, checkedValue }) {
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
      className="u-full-width"
      name={name}
      value={checkedValue}
      onChange={onChange}
    >
      {optionList}
    </select>
  );
}
