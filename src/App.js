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
      repoData: '',
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

    // Get User details from REST API
    octokit.users.getForUser({username: this.state.username}).then(result => {
      this.setState({userData: result.data});
      console.log(this.state.userData);
    });

    // Get User Repo details from REST API
    octokit.repos.getForUser({username: this.state.username}).then(result => {
      this.setState({repoData: result.data});
      console.log(result.data);
    });

    // Set to be submitted
    this.setState({submitted: true});
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
          {this.state.submitted && <UserCard userData={this.state.userData} repoData={this.state.repoData} onReturn={this.handleReturn}/>}
        </div>
      </div>
    );
  }
}

export default App;
