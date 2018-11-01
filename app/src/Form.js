import React, { Component } from 'react';
import './Form.css';
const octokit = require('@octokit/rest')()

class Form extends Component {

  constructor (props) {
    super(props);
    this.state = {
      username: ''
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }


  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm" onSubmit={this.props.onSubmit}>
        <label htmlFor="username">GitHub Access</label>
        <div className="panel panel-default">
        </div>
        <div className={`form-group`}>
          <input type="text" required className="form-control" name="username"
            placeholder="GitHub Username"
            onChange={this.props.onChangeValue}/>
        </div>
        <button type="submit" className="btn btn-primary">Find Me</button>
      </form>
    )
  }
}

export default Form;
