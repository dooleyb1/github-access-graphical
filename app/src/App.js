import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ require('./images/gh2.png') } className="App-logo" alt="logo" />
          <Form />
        </header>
      </div>
    );
  }
}

export default App;
