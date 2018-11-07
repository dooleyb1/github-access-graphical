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
      selectedRepoData: "",
      title: "View user repo"
    };

    this.onSelelectRepo = this.onSelelectRepo.bind(this);
  }

  onSelelectRepo = (repoKey, repoDict) => {
    console.log("Repo selected " + repoKey + "[" + repoDict[repoKey] + "]");
    this.setState({title: repoDict[repoKey]});

    //Get the given repo
    octokit.repos.get({owner: this.props.userData.login, repo: repoDict[repoKey][0]}).then(result => {
      console.log(result.data);
      console.log("Language => " + result.data.language);
      this.setState({selectedRepoData: result.data});
    });

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
          {this.state.repoSelected && <UserRepos selectedRepoData={this.state.selectedRepoData}/>}
        </div>
    )
  }
}

export default UserPage;
