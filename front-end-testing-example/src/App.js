import React, { Component } from 'react';
import mate from './mate.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={mate} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
