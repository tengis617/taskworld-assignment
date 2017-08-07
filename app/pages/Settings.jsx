import React, { Component } from 'react';

import Layout from '../components/Layout';
import SideMenu from '../components/SideMenu';
import Preferences from '../components/Preferences';
import './Settings.css';

export default class UserPreferences extends Component {
  constructor(props) {
    super(props);
    this.state = { preferences: {
      language: ''
    } };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/api/preferences', { credentials: 'include' })
      .then(res => res.json())
      .then(res => this.setState({ preferences: res.preferences }));
  }


  // TODO: make button disabled if nothing changed
  handleSubmit(event) {
    event.preventDefault();
    fetch('/api/preferences', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ preferences: this.state.preferences }),
    });
  }

  handleChange(event) {
    const preferences = this.state.preferences;
    const target = event.target;
    const name = target.name;
    const value = target.value;
    preferences[name] = value;
    this.setState({ preferences });
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="column column-20 column-collapse column-offset-10">
              <SideMenu />
            </div>
            <div className="column column-50 column-collapse">
              <Preferences
                preferences={this.state.preferences}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
