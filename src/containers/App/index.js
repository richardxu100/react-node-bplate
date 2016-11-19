import React, { Component } from 'react';

import logo from './logo.svg';
import './style.css';

export default class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Ahh phew noo yoo, noo</h2>
        </div>
        <p className="App-intro">
          To asdfasf started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
