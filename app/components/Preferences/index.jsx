import React from 'react';
import Section from '../Section';
import Tile from '../Tile';
import { DropdownList, RadioButton } from '../FormElements';

export const CategoryListSettings = ({ onChange, checkedValue }) => (
  <div>
    <label>Category lists</label>
    <small>Automatically add Fancy'd items to the Category list</small>
    <div >
      <RadioButton
        onChange={onChange}
        checkedValue={checkedValue}
        name="autoAddToCategoryList"
        options={[{ value: 'enabled', text: 'Enabled' }, { value: 'disabled', text: 'Disabled' }]}
      />
    </div>
  </div>
);

export const LanguageSettings = ({ selectedLanguage, onChange }) => (
  <div>
    <p className="bold section-label">Language</p>
    <DropdownList
      onChange={onChange}
      options={['English', 'German', 'Korean', 'French']}
      checkedValue={selectedLanguage}
      name="language"
    />
    <p>
      <small>
          Interested in helping translate Fancy? <a href="/"> Let us know.</a>
      </small>
    </p>
  </div>
);

export const TimeZoneSettings = ({ selectedTimeZone, onChange }) => (
  <div>
    <p className="bold section-label">Time Zone</p>
    <DropdownList
      name="timeZone"
      checkedValue={selectedTimeZone}
      onChange={onChange}
      options={['(UTC+2:00)', '(UTC+3:00)', '(UTC+4:00)', '(UTC+5:00)']}
    />
  </div>
);

export const CurrencySettings = ({ selectedCurrency, onChange }) => (
  <div>
    <p className="bold section-label">Currency</p>
    <DropdownList
      name="currency"
      checkedValue={selectedCurrency}
      onChange={onChange}
      options={['USD', 'KRW', 'EUR', 'GBP']}
    />
  </div>
);

export const NotificationSettings = ({ onChange, checkedValue }) => {
  const options = [
    { text: 'Enabled', value: 'enabled' },
    { text: 'Disabled', value: 'disabled' },
  ];

  return (
    <div>
      <p className="bold section-label">SMS Notifications</p>
      <p>
        <small>
          Enable SMS notifications to send text message alert notifications
          to your mobile phone for your purchased orders.
        </small>
      </p>
      <div>
        <RadioButton
          onChange={onChange}
          checkedValue={checkedValue}
          name="smsNotifications"
          options={options}
        />
      </div>
    </div>
  );
};

export const MessagesSettings = ({ onChange, checkedValue }) => {
  const options = [
    { text: 'Everyone', value: 'everyone' },
    { text: 'People you follow', value: 'peopleYouFollow' },
    { text: <span><i className="fa fa-lock" /> No one</span>, value: 'noOne' },
  ];

  return (
    <div>
      <p className="bold section-label">Messages</p>
      <p>
        <small>Control who can send you messages.</small>
      </p>
      <div>
        <RadioButton
          onChange={onChange}
          checkedValue={checkedValue}
          name="receiveMessagesFrom"
          options={options}
        />
      </div>
    </div>
  );
};

export const ProfileVisibilitySettings = ({ onChange, checkedValue }) => {
  const options = [
    { value: 'everyone', text: 'Everyone' },
    { value: 'private', text: <span><i className="fa fa-lock" /> Private</span> },
  ];
  return (
    <div>
      <p className="bold section-label">Profile Visibility</p>
      <p>
        <small>Manage who can see your activity,
            things you fancy, your followers,
            people you follow or in anyone’s search results.
        </small>
      </p>
      <div>
        <RadioButton
          onChange={onChange}
          checkedValue={checkedValue}
          name="profileVisibility"
          options={options}
        />
      </div>
    </div>
  );
};

export const RecentlyViewedSettings = () => (
  <div>
    <p className="bold section-label">Recently viewed</p>
    <p>
      <small>
        Manage your fancy Manage your Fancy browsing history.
      </small>
    </p>
    <p><a href="">Delete all items</a></p>
  </div>
);
export default function Preferences({ preferences, handleSubmit, handleChange }) {
  return (
    <Tile header="Edit Preferences">
      <form onSubmit={handleSubmit}>
        <Section header="Localization">
          <LanguageSettings
            selectedLanguage={preferences.language}
            onChange={handleChange}
          />
          <TimeZoneSettings
            onChange={handleChange}
            selectedTimeZone={preferences.timeZone}
          />
          <CurrencySettings
            onChange={handleChange}
            selectedCurrency={preferences.currency}
          />
        </Section>
        <Section header="Privacy">
          <ProfileVisibilitySettings
            onChange={handleChange}
            checkedValue={preferences.profileVisibility}
          />
          <MessagesSettings
            onChange={handleChange}
            checkedValue={preferences.receiveMessagesFrom}
          />
          <RecentlyViewedSettings />
        </Section>
        <Section header="Content">
          <CategoryListSettings
            onChange={handleChange}
            checkedValue={preferences.autoAddToCategoryList}
          />
        </Section>
        <Section header="Notifications">
          <NotificationSettings
            onChange={handleChange}
            checkedValue={preferences.smsNotifications}
          />
        </Section>
        <Section>
          <input
            type="submit"
            value="save preferences"
            className="float-right fancy-button"
          />
        </Section>
      </form>
    </Tile>
  );
}
