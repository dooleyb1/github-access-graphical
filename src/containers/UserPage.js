import React, { Component } from 'react';
import '../css/UserPage.css';
import UserProfile from './UserProfile.js';
import UserRepos from './UserRepos.js';
import VerticalLine from './VerticalLine.js';
const octokit = require('@octokit/rest')();

class UserPage extends Component {

  constructor (props) {
    super(props);

    this.state = {
      repoSelected: false,
      graphData: [],
      repoData: {},
      title: "View user repo"
    };

    this.onSelelectRepo = this.onSelelectRepo.bind(this);
  }

  async onSelelectRepo(repoKey, repoDict) {
    this.setState({title: repoDict[repoKey]});

    // Get repository information
    octokit.repos.get({owner: this.props.userData.login, repo: repoDict[repoKey]}).then(result => {
      this.setState({repoData: {
        name: result.data.name,
        language: result.data.language,
        subscribers_count: result.data.subscribers_count,
        watchers: result.data.watchers,
        created_at: result.data.created_at,
        html_url: result.data.html_url
      }})
    })

    // Get commit information for repository
    octokit.repos.getCommits({owner: this.props.userData.login, repo: repoDict[repoKey], per_page: 100}).then(result => {
      const commits_json = result.data;

      //console.log(commits_json)
      var commitCounts = {};

      // Loop over every commit
      for(var commit in commits_json){

        var commitDate = new Date(commits_json[commit].commit.author.date.substring(0,10))

        // If commit count exists for that day, increment
        if(commitCounts[commitDate]){
          commitCounts[commitDate]++;
        } else {
          commitCounts[commitDate] = 1;
        }
      }

      // Get data for commit graph
      var data = [];

      for(var node in commitCounts){
        data.push({x: new Date(node), y: commitCounts[node]})
      }

      this.setState({graphData: data})
    })

    // Mark repoSelected as true
    this.setState({repoSelected: true});
  }

  render () {
    return (
        <div className="container">
          <UserProfile
            onSelect={this.onSelelectRepo}
            repoData={this.props.repoData}
            userData={this.props.userData}
            onReturn={this.props.onReturn}
            title={this.state.title}
          />
          <VerticalLine/>
          {this.state.repoSelected && <UserRepos graphData={this.state.graphData} repoData={this.state.repoData}/>}
        </div>
    )
  }
}

export default UserPage;
