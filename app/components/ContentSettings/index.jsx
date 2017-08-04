import React from 'react';


export default function CategoryListSettings({onChange, checkedValue }) {
  return (
    <div>
      <label>Category lists</label>
      <small>Automatically add Fancy'd items to the Category list</small>
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
