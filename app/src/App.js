import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      username: '',
      submitted: false,
      data: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleSubmit(event) {
    //console.log('A name was submitted: ' + this.state.username);
    event.preventDefault();
    this.state.submitted = true;
    console.log('A name was submitted: ' + this.state.username);
    console.log('this.props.submitted: ' + this.state.submitted);
    //octokit.users.getForUser({username: this.state.username}).then(result => {console.log(result)});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ require('./images/gh2.png') } className="App-logo" alt="logo" />
          <Form onChangeValue={this.handleChange} onSubmit={this.handleSubmit}/>
        </header>
      </div>
    );
  }
}

export default App;
