import React, { Component } from 'react';
import '../css/UserRepos.css';
import RepoGraph from './RepoGraph.js';
const octokit = require('@octokit/rest')();

class UserRepos extends Component {

  render () {

    if(!this.props.repoData){
      return(<div></div>)
    } else {
      return (
        <div className="g grid-75">
          <div className="repo-container">
            <div className="g grid-25">
              <h3> <span style={{color: '#90A4AE'}}>{this.props.repoData.name}</span> </h3>
              <p> <span style={{color: '#4DD0E1'}}>Language:</span> {this.props.repoData.language} </p>
              <p> <span style={{color: '#4DD0E1'}}>Subscribers:</span> {this.props.repoData.subscribers_count} </p>
              <p> <span style={{color: '#4DD0E1'}}>Watchers:</span> {this.props.repoData.watchers} </p>
              <p> <span style={{color: '#4DD0E1'}}>Created At:</span> {this.props.repoData.created_at} </p>
              <a href={this.props.repoData.html_url} style={{color: '#4DD0E1'}} target="_blank" rel="noopener noreferrer">Repository Link</a>
            </div>
            <div className="g grid-75">
              {this.props.graphData && <RepoGraph graphData={this.props.graphData}/>}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default UserRepos;
