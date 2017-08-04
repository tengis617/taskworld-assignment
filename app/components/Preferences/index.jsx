import React from 'react';
import {
  LanguageSettings,
  TimeZoneSettings,
  CurrencySettings,
} from '../LocalizationSettings';
import {
  MessagesSettings,
  ProfileVisibilitySettings,
  RecentlyViewedSettings,
} from '../PrivacySettings';
import CategoryListSettings from '../ContentSettings';
import NotificationsSettings from '../NotificationsSettings';
import Section from '../Section';
import Tile from '../Tile';

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
          <NotificationsSettings
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