import React, { Component } from 'react';
import './Form.css';
const octokit = require('@octokit/rest')()

class Form extends Component {

  constructor (props) {
    super(props);
    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.username);
    event.preventDefault();

    octokit.users.getForUser({username: this.state.username}).then(result => {console.log(result)});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="username">GitHub Access</label>
        <div className="panel panel-default">
        </div>
        <div className={`form-group`}>
          <input type="text" required className="form-control" name="username"
            placeholder="GitHub Username"
            onChange={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Find Me</button>
      </form>
    )
  }
}

export default Form;
