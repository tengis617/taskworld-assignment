import React from 'react';


export default function CategoryListSettings({onChange, checkedValue }) {
  return (
    <div>
      <p className="bold section-label">Category lists</p>
      <p className="subtext">Automatically add Fancy'd items to the Category list</p>
      <div onClick={onChange}>
        <input
          type="radio"
          name="autoAddToCategoryList"
          value="enabled"
          checked={checkedValue === 'enabled'}
        />
        Enable
        <input
          type="radio"
          name="autoAddToCategoryList"
          value="disabled"
          checked={checkedValue === 'disabled'}
        />
        Disable
      </div>
    </div>

  );
}
