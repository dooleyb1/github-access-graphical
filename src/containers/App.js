import React, { Component } from 'react';
import '../css/App.css';
import Form from './Form.js';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      username: '',
      submitted: false,
      userData: '',
      repoData: '',
      isValidUsername: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleSubmit(event) {

    event.preventDefault();

  }

  handleReturn(event) {

    this.setState({isValidUsername: true});
    this.setState({username: ''});
    this.setState({submitted: false});
    this.setState({userData: ''});
  }

  render() {
    return (
      <div className="app">
        <img src={ require('../images/gh2.png') } className="app-logo" alt="logo" />
        <div className="app-container">
          {!this.state.submitted && <Form onChangeValue={this.handleChange} onSubmit={this.handleSubmit} isValidUsername={this.state.isValidUsername}/>}
        </div>
      </div>
    );
  }
}

export default App;
