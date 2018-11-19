import React, { Component } from 'react';
import '../css/UserRepos.css';
import RepoGraph from './RepoGraph.js';
import HorizontalLine from './HorizontalLine.js';
const octokit = require('@octokit/rest')();

class UserRepos extends Component {

  render () {

    if(!this.props.repoData){
      return(<div></div>)
    } else {
      return (
        <div className="row1">
            <div className="column1">
              <h3> <span style={{color: '#90A4AE'}}>{this.props.repoData.name}</span> </h3>
              <HorizontalLine/>
              <p> <span style={{color: '#4DD0E1'}}>Language:</span> {this.props.repoData.language} </p>
              <p> <span style={{color: '#4DD0E1'}}>Subscribers:</span> {this.props.repoData.subscribers_count} </p>
              <p> <span style={{color: '#4DD0E1'}}>Watchers:</span> {this.props.repoData.watchers} </p>
              <p> <span style={{color: '#4DD0E1'}}>Commits:</span> {this.props.commitCount} </p>
              <p> <span style={{color: '#4DD0E1'}}>Created At:</span> {this.props.repoData.created_at} </p>
              <a href={this.props.repoData.html_url} style={{color: '#4DD0E1'}} target="_blank" rel="noopener noreferrer">Repository Link</a>
            </div>
            <div className="column2">
              {this.props.graphData && <RepoGraph graphData={this.props.graphData}/>}
            </div>
        </div>
      )
    }
  }
}

export default UserRepos;
