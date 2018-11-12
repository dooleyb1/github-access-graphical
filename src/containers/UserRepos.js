import React, { Component } from 'react';
import '../css/UserRepos.css';
import RepoGraph from './RepoGraph.js';
const octokit = require('@octokit/rest')();

class UserRepos extends Component {

  constructor (props) {
    super(props);
  }

  render () {

    if(!this.props.repoData){
      return(<div></div>)
    } else {
      return (
        <div className="g grid-45">
          <h3> {this.props.repoData.name} </h3>
          <p> Language -> {this.props.repoData.language} </p>
          <p> Subscribers -> {this.props.repoData.subscribers_count} </p>
          <p> Watchers -> {this.props.repoData.watchers} </p>
          <p> Created At > {this.props.repoData.created_at} </p>
          <a href={this.props.repoData.html_url} target="_blank" rel="noopener noreferrer">Repository Link</a>
          {this.props.graphData && <RepoGraph graphData={this.props.graphData}/>}
        </div>
      )
    }
  }
}

export default UserRepos;
