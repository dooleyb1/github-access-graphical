import React, { Component } from 'react';
import '../css/UserRepos.css';
import RepoGraph from './RepoGraph.js';
const octokit = require('@octokit/rest')();

class UserRepos extends Component {

  constructor (props) {
    super(props);

    this.state = {
      repoDataReady: null,
      repoData: {}
    };
  }

  componentDidMount(){

    var fetchData = {}

    octokit.repos.get({owner: this.props.owner, repo: this.props.repo}).then(result => {
      this.setState({repoData: {
        name: result.data.name,
        language: result.data.language,
        subscribers_count: result.data.subscribers_count,
        watchers: result.data.watchers,
        created_at: result.data.created_at,
        html_url: result.data.html_url
      }})
    })

    this.setState({repoDataReady: true})
    console.log(this.state.repoData)
  }

  render () {

    if(!this.state.repoDataReady){
      return(<div></div>)
    } else {
      return (
        <div className="g grid-45">
          <h3> {this.state.repoData.name} </h3>
          <p> Language -> {this.state.repoData.language} </p>
          <p> Subscribers -> {this.state.repoData.subscribers_count} </p>
          <p> Watchers -> {this.state.repoData.watchers} </p>
          <p> Created At > {this.state.repoData.created_at} </p>
          <a href={this.state.repoData.html_url} target="_blank" rel="noopener noreferrer">Repository Link</a>
        </div>
      )
    }
  }
}

export default UserRepos;
