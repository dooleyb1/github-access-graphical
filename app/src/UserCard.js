import React, { Component } from 'react';
import './UserCard.css';

class UserCard extends Component {

  render () {
    return (
      <div className="User-card">
        <img src={this.props.data.avatar_url} onClick={this.props.onReturn} className="User-icon" alt="user icon"/>
        <div className="User-details">
          <p>{this.props.data.name}</p>
          <p>{this.props.data.bio}</p>
          <p>Followers: {this.props.data.followers} | Following: {this.props.data.following}</p>
          <p>Public Repos: {this.props.data.public_repos}</p>
          <a className="User-blog" href={this.props.data.blog} target="_blank" rel="noopener noreferrer">Blog</a>
        </div>
        <div className="Button">
          <button type="submit" className="btn btn-primary" onClick={this.props.onReturn}>Return</button>
        </div>
      </div>
    )
  }
}

export default UserCard;
