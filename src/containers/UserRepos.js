import React, { Component } from 'react';
import '../css/UserRepos.css';

class UserRepos extends Component {

  render () {
    return (
      <div className="g grid-45">
        <h3> {this.props.selectedRepoData.name} </h3>
        <p> Language -> {this.props.selectedRepoData.language} </p>
        <p> Subscribers -> {this.props.selectedRepoData.subscribers_count} </p>
        <p> Watchers -> {this.props.selectedRepoData.watchers} </p>
        <p> Created At -> {this.props.selectedRepoData.created_at} </p>
        <a href={this.props.selectedRepoData.html_url} target="_blank" rel="noopener noreferrer">Repository Link</a>
      </div>
    )
  }
}

export default UserRepos;
