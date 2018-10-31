import React, { Component } from 'react';
import './Form.css';

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
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
