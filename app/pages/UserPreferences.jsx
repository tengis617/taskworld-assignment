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
      autoAddToCategoryList: 'enabled',
      SmsNotifications: 'enabled',
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
    this.console.log('submitted!');
    this.console.log(event);
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
              <p className="bold">Category lists</p>
              <div className="row">
                <div className="six columns">
                  <label htmlFor="autoAddToCategoryListEnable">
                    <input
                      type="radio"
                      name="autoAddToCategoryList"
                      value="enable"
                      id="autoAddToCategoryListDisable"
                    />
                    Enable</label>
                </div>
                <div className="six columns">
                  <label htmlFor="autoAddToCategoryListDisable">
                    <input
                      type="radio"
                      name="autoAddToCategoryList"
                      value="disable"
                      id="autoAddToCategoryListDisable"
                    />
                    Disable
                  </label>
                </div>
              </div>
            </Section>
            <Section header="Notifications">
              <p className="bold">SMS Notifications</p>
              <p>Enable SMS notifications to send text message alert notifications
            to your mobile phone for your purchased orders.</p>
              <div className="row">
                <div className="six columns">
                  <label htmlFor="smsNotificationsEnable">
                    <input
                      type="radio"
                      name="smsNotifications"
                      value="enable"
                      id="smsNotificationsDisable"
                    />
                    Enable</label>
                </div>
                <div className="six columns">
                  <label htmlFor="smsNotificationsDisable">
                    <input
                      type="radio"
                      name="smsNotifications"
                      value="disable"
                      id="smsNotificationsDisable"
                    />
                    Disable
                  </label>
                </div>
              </div>
            </Section>
            <Section>
              <input type="submit" value="save preferences" className="button-primary u-pull-right" />
            </Section>
          </form>
        </Tile>
      </div>
    );
  }
}
