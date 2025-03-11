import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { browserTracker } from '@pandastack/event-tracker';

class App extends Component {
  componentDidMount() {
    // Initialize the analytics tracker when component mounts
    browserTracker.init({ project_id: "49ac8def-eda3-4286-bb8f-a6abaaa70a76" });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
