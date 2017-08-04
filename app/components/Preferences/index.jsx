import React from 'react';
import Section from '../Section';
import Tile from '../Tile';
import { DropdownList, RadioButton } from '../FormElements';

export const CategoryListSettings = ({ onChange, checkedValue }) => {
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
export const LanguageSettings = ({ selectedLanguage, onChange }) => {
  return (
    <div>
      <label>Language</label>
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
}

export const TimeZoneSettings = ({ selectedTimeZone, onChange }) => {
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
};

export const CurrencySettings = ({ selectedCurrency, onChange }) => {
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
};

export const NotificationSettings = ({ onChange, checkedValue }) => {
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
        <input
          type="radio"
          name="smsNotifications"
          value="enabled"
          onClick={onChange}
          checked={checkedValue === 'enabled'}
        />
        Enable
        <input
          type="radio"
          name="smsNotifications"
          value="disabled"
          onClick={onChange}
          checked={checkedValue === 'disabled'}
        />
        Disable
      </div>
    </div>
  );
};

export const MessagesSettings = ({ onChange, checkedValue }) => (
  <p>
    <label>Messages</label>
    <small>Control who can send you messages.</small>
    <div onClick={onChange} >
      <input
        type="radio"
        name="receiveMessagesFrom"
        value="everyone"
        checked={checkedValue === 'everyone'}
      />
      Everyone
      <input
        type="radio"
        name="receiveMessagesFrom"
        value="peopleYouFollow"
        checked={checkedValue === 'peopleYouFollow'}
      />
      People you follow
      <input
        type="radio"
        name="receiveMessagesFrom"
        value="noOne"
        checked={checkedValue === 'noOne'}
      />
      No one
    </div>
  </p>
);

export const ProfileVisibilitySettings = ({ onChange, checkedValue }) => (
  <p>
    <label>Profile Visibility</label>
    <small>Manage who can see your activity,
            things you fancy, your followers,
            people you follow or in anyone’s search results.
    </small>
    <div onClick={onChange} >
      <input
        type="radio"
        name="profileVisibility"
        value="everyone"
        id="profileVisibilityEveryone"
        checked={checkedValue === 'everyone'}
      />
          Everyone
      <input
        type="radio"
        name="profileVisibility"
        value="private"
        id="profileVisibilityPrivate"
        checked={checkedValue === 'private'}
      />
          Private
    </div>
  </p>
);

export const RecentlyViewedSettings = () => (
  <p>
    <label>Recently viewed</label>
    <small>Manage your fancy Manage your Fancy browsing history.</small>
    <p><a href="">Delete all items</a></p>
  </p>
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
            className="float-right"
          />
        </Section>
      </form>
    </Tile>
  );
}