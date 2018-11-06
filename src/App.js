import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import UserCard from './UserCard.js';
const octokit = require('@octokit/rest')();

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      username: '',
      submitted: false,
      userData: '',
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

    octokit.users.getForUser({username: this.state.username}).then(result => {
      this.setState({userData: result.data});
      this.setState({submitted: true});
      console.log(this.state.userData);
    });

    octokit.repos.getForUser({username: this.state.username}).then(result => {
      console.log(result.data);
    });
  }

  handleReturn(event) {

    this.setState({username: ''});
    this.setState({submitted: false});
    this.setState({userData: ''});
  }

  render() {
    return (
      <div className="app">
        <img src={ require('./images/gh2.png') } className="app-logo" alt="logo" />
        <div>
          {!this.state.submitted && <Form onChangeValue={this.handleChange} onSubmit={this.handleSubmit}/>}
          {this.state.submitted && <UserCard data={this.state.userData} onReturn={this.handleReturn}/>}
        </div>
      </div>
    );
  }
}

export default App;
