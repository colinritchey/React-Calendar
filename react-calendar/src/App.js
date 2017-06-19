import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { yearData } from './schema';

import Year from './components/year';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Year data={yearData}/>
      </div>
    );
  }
}

export default App;
