import React, { Component } from 'react';
import './UserCard.css';

class UserCard extends Component {

  render () {
    return (
      <div className="User-card">
        <img src={this.props.data.avatar_url} className="User-icon" alt="user icon"/>
        <p className="User-name">{this.props.data.name}</p>
        <p className="User-bio">{this.props.data.bio}</p>
        <a className="User-blog" href={this.props.data.blog} target="_blank" rel="noopener noreferrer">Blog</a>
        <p className="User-followers">Followers: {this.props.data.followers}</p>
        <p className="User-following">Following: {this.props.data.following}</p>
        <p className="User-repos">Public Repos: {this.props.data.public_repos}</p>
      </div>
    )
  }
}

export default UserCard;
