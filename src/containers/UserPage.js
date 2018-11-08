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
      repoData: {},
      title: "View user repo"
    };

    this.onSelelectRepo = this.onSelelectRepo.bind(this);
  }

  async onSelelectRepo(repoKey, repoDict) {
    //console.log("Repo selected " + repoKey + "[" + repoDict[repoKey] + "]");
    this.setState({title: repoDict[repoKey]});

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

    console.log(this.state.repoData)
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
          {this.state.repoSelected && <UserRepos owner={this.props.userData.login} repoData={this.state.repoData}/>}
        </div>
    )
  }
}

export default UserPage;
