import React, { Component } from 'react';
import './UserCard.css';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';

class UserCard extends Component {

  render () {
    return (
        <div className="container">
          <div className="g grid-45">
            <div className="user-card">
              <img className="user-icon" src={this.props.data.avatar_url} alt="user icon"/>
              <div className="user-details">
                <p>{this.props.data.name}</p>
                <p>{this.props.data.bio}</p>
                <p>Followers: {this.props.data.followers} | Following: {this.props.data.following}</p>
                <p>Public Repos: {this.props.data.public_repos}</p>
              </div>
              <a className="user-blog" href={this.props.data.blog} target="_blank" rel="noopener noreferrer">Blog</a>
              <div className="repo-dropdown">
                  <DropdownButton
                    title="View user repo"
                    id="dropdown-size-medium"
                    >
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                  </DropdownButton>
              </div>
              <div className="return-button">
                <button type="submit" className="btn btn-primary" onClick={this.props.onReturn}>Return</button>
              </div>
            </div>
          </div>
          <div className="g grid-5">
            <div className="vertical-line"></div>
          </div>
          <div className="g grid-45">
            <h3> Column 3 </h3>
            <span> column 3 content </span>
          </div>
        </div>
    )
  }
}

export default UserCard;
