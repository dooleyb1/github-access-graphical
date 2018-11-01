import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <div className="Form">
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
      </div>
    )
  }
}

export default Form;
