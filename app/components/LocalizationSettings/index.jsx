import React from 'react';

export const LanguageSettings = ({ selectedLanguage, onChange }) => {
  return (
    <div>
      <p className="bold">Language</p>
      <select
        className="u-full-width"
        name="language"
        value={selectedLanguage}
        onChange={onChange}
      >
        <option value="EN">English</option>
        <option value="DE">German</option>
        <option value="KR">Korean</option>
        <option value="FR">French</option>
      </select>
      <p>Interested in helping translate Fancy? Let us know.</p>
    </div>
  );
};

export const TimeZoneSettings = ({ selectedTimeZone, onChange }) => {
  return (
    <div>
      <p className="bold">Time Zone</p>
      <select
        className="u-full-width"
        name="timeZone"
        value={selectedTimeZone}
        onChange={onChange}
      >
        <option value="(UTC+2:00)">(UTC+2:00)</option>
        <option value="(UTC+3:00)">(UTC+3:00)</option>
        <option value="(UTC+4:00)">(UTC+4:00)</option>
        <option value="(UTC+5:00)">(UTC+5:00)</option>
      </select>
    </div>
  );
};

export const CurrencySettings = ({ selectedCurrency, onChange }) => {
  return (
    <div>
      <p className="bold">Currency</p>
      <select
        className="u-full-width"
        name="currency"
        value={selectedCurrency}
        onChange={onChange}
      >
        <option value="USD">U.S dollars($)</option>
        <option value="KRW">Korean won (₩)</option>
        <option value="EUR">Euros (€)</option>
        <option value="GBP">British pounds (£)</option>
      </select>
    </div>
  );
};
