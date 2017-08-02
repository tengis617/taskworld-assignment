import React, { Component } from 'react';

import Section from '../components/Section/';
import Tile from '../components/Tile/';
import {
  LanguageSettings,
  TimeZoneSettings,
  CurrencySettings,
} from '../components/LocalizationSettings';
import {
  MessagesSettings,
  ProfileVisibilitySettings,
  RecentlyViewedSettings,
} from '../components/PrivacySettings';
import CategoryListSettings from '../components/ContentSettings';
import NotificationsSettings from '../components/NotificationsSettings';

import './UserPreferences.css';

export default class UserPreferences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'EN',
      currency: 'USD',
      timeZone: '(UTC+2:00)',
      profileVisibility: 'private',
      receiveMessagesFrom: 'everyone',
      recentlyViewed: [],
      autoAddToCategoryList: 'disabled',
      smsNotifications: 'disabled',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // componentDidMount() {
  //   fetch('/users/preferences')
  //     .then(res => res.json())
  //     .then(res => this.setState(res));
  // }

  handleSubmit(event) {
    event.preventDefault();
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="container">
        <Tile header="Edit Preferences">
          <form onSubmit={this.handleSubmit}>
            <Section header="Localization">
              <LanguageSettings
                selectedLanguage={this.state.language}
                onChange={this.handleChange}
              />
              <TimeZoneSettings
                onChange={this.handleChange}
                selectedTimeZone={this.state.timeZone}
              />
              <CurrencySettings
                onChange={this.handleChange}
                selectedCurrency={this.state.currency}
              />
            </Section>
            <Section header="Privacy">
              <ProfileVisibilitySettings
                onChange={this.handleChange}
                checkedValue={this.state.profileVisibility}
              />
              <MessagesSettings
                onChange={this.handleChange}
                checkedValue={this.state.receiveMessagesFrom}
              />
              <RecentlyViewedSettings />
            </Section>
            <Section header="Content">
              <CategoryListSettings
                onChange={this.handleChange}
                checkedValue={this.state.autoAddToCategoryList}
              />
            </Section>
            <Section header="Notifications">
              <NotificationsSettings
                onChange={this.handleChange}
                checkedValue={this.state.smsNotifications}  
              />
            </Section>
            <Section>
              <input
                type="submit"
                value="save preferences"
                className="button-primary u-pull-right"
              />
            </Section>
          </form>
        </Tile>
      </div>
    );
  }
}
