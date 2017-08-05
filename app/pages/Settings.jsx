import React, { Component } from 'react';

import Layout from '../components/Layout';
import SideMenu from '../components/SideMenu';
import Preferences from '../components/Preferences';
import './Settings.css';

export default class UserPreferences extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch('/api/preferences', { credentials: 'same-origin' })
      .then(res => res.json())
      .then(res => this.setState(res));
  }


  // TODO: make a post request to the server
  // TODO: make button disabled if nothing changed
  handleSubmit(event) {
    event.preventDefault();
    console.log('submitted!');
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
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
                preferences={this.state}
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
