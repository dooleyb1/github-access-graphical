import React, { Component } from 'react';
import '../css/UserRepos.css';
const octokit = require('@octokit/rest')();

class UserRepos extends Component {

  constructor (props) {
    super(props);

    this.state = {
      name: '',
      language: '',
      subscribers: '',
      html_url: '',
      watchers: '',
      created_at: '',
      commit_count: ''
    };
  }

  async componentDidMount() {
    const repo_result = await octokit.repos.get({owner: this.props.owner, repo: this.props.repo})
    const commits_result = await octokit.repos.getCommits({owner: this.props.owner, repo: this.props.repo})
    const repo_data = await repo_result.data;
    const commit_data = await commits_result.data;

    this.setState({
      name: repo_data.name,
      language: repo_data.language,
      subscribers: repo_data.subscribers,
      html_url: repo_data.html_url,
      watchers: repo_data.watchers,
      created_at: repo_data.created_at,
      commit_count: commit_data.length
    });
  }


  render () {
    return (
      <div className="g grid-45">
        <h3> {this.state.name} </h3>
        <p> Language -> {this.state.language} </p>
        <p> Subscribers -> {this.state.subscribers_count} </p>
        <p> Watchers -> {this.state.watchers} </p>
        <p> Created At -> {this.state.created_at} </p>
        <p> Commits -> {this.state.commit_count}</p>
        <a href={this.state.html_url} target="_blank" rel="noopener noreferrer">Repository Link</a>
      </div>
    )
  }
}

export default UserRepos;
