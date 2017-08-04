import React from 'react';
import { DropdownList } from '../FormElements';

export function LanguageSettings({ selectedLanguage, onChange }) {
  return (
    <div>
      <label>Language</label>
      <DropdownList
        onChange={onChange}
        options={['English', 'German', 'Korean', 'French']}
        checkedValue={selectedLanguage}
        name="language"
      />
      <small>Interested in helping translate Fancy? <a href=""> Let us know.</a></small>
    </div>
  );
}

export function TimeZoneSettings({ selectedTimeZone, onChange }) {
  return (
    <div>
      <label>Time Zone</label>
      <DropdownList
        name="timeZone"
        checkedValue={selectedTimeZone}
        onChange={onChange}
        options={['(UTC+2:00)', '(UTC+3:00)', '(UTC+4:00)', '(UTC+5:00)']}
      />
    </div>
  );
}

export function CurrencySettings({ selectedCurrency, onChange }) {
  return (
    <div>
      <label>Currency</label>
      <DropdownList
        name="currency"
        checkedValue={selectedCurrency}
        onChange={onChange}
        options={['USD', 'KRW', 'EUR', 'GBP']}
      />
    </div>
  );
}
