import React, { Component } from 'react';
import '../css/UserRepos.css';
import RepoGraph from './RepoGraph.js';
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
      commit_count: '',
      commits_dict: '',
      data_ready: false,
    };

    this.getRepoGraphData = this.getRepoGraphData.bind(this);
  }

  async componentDidMount() {
    const repo_result = await octokit.repos.get({owner: this.props.owner, repo: this.props.repo})
    const commits_result = await octokit.repos.getCommits({owner: this.props.owner, repo: this.props.repo})
    const repo_data = await repo_result.data;
    const commit_data = await commits_result.data;

    const commits_dict = await this.getRepoGraphData(commit_data);

    console.log(commits_dict);

    this.setState({
      name: repo_data.name,
      language: repo_data.language,
      subscribers: repo_data.subscribers_count,
      html_url: repo_data.html_url,
      watchers: repo_data.watchers,
      created_at: repo_data.created_at,
      commit_count: commit_data.length,
      commits_dict: commits_dict,
      data_ready: true
    });
  }

  async getRepoGraphData(commits_json){

    var commitCounts = {};
    var mostRecentCommitDate = '';
    var thirtyDaysPrevious = '';

    // Loop over every commit
    for(var commit in commits_json){

      //Check most recent commit
      if(commit === 0){
        mostRecentCommitDate = new Date (commits_json[commit].commit.author.date);
        // console.log("Most recent date -> " + mostRecentCommitDate);

        thirtyDaysPrevious = new Date (mostRecentCommitDate);
        thirtyDaysPrevious.setDate(thirtyDaysPrevious.getDate() - 30)
        // console.log("Thirty days previous -> " + thirtyDaysPrevious);
      }

      var commitDate = new Date(commits_json[commit].commit.author.date);

      // Ensure commit is within 30 days
      if(commitDate > thirtyDaysPrevious){
        // console.log(commitDate + " is less than 30 days")
        // Otherwise handle commit as normal
        commitDate = new Date(commits_json[commit].commit.author.date.substring(0,10))

        // If commit count exists for that day, increment
        if(commitCounts[commitDate]){
          commitCounts[commitDate]++;
        } else {
          commitCounts[commitDate] = 1;
        }
      }

    }

    return commitCounts;
  }

  render () {
    return (
      <div className="g grid-45">
        <h3> {this.state.name} </h3>
        <p> Language -> {this.state.language} </p>
        <p> Subscribers -> {this.state.subscribers_count} </p>
        <p> Watchers -> {this.state.watchers} </p>
        <p> Created At > {this.state.created_at} </p>
        <p> Commits -> {this.state.commit_count}</p>
        <a href={this.state.html_url} target="_blank" rel="noopener noreferrer">Repository Link</a>
        {this.state.data_ready && <RepoGraph commitData={this.state.commits_dict}/>}
      </div>
    )
  }
}

export default UserRepos;
