import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { yearData } from './schema';

import Year from './components/year';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Calendar</h2>
        </div>
        <Year data={yearData}/>
      </div>
    );
  }
}

export default App;
