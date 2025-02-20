import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    if (window.Analytics) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.pandastack.in/analytics.js';
    script.async = true;
    script.onload = () => {
      if (window.Analytics) {
        window.Analytics.init();  // Added window. prefix here
      }
    };
    document.head.appendChild(script);
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
