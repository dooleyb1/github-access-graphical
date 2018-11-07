import React, { Component } from 'react';
import '../css/UserPage.css';
import UserProfile from './UserProfile.js';
const octokit = require('@octokit/rest')();

class UserPage extends Component {

  constructor (props) {
    super(props);

    this.state = {
      repoSelected: false,
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
      this.repoData = result.data;
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
          <div className="g grid-5">
            <div className="vertical-line"></div>
          </div>
          <div className="g grid-45">
            <h3> Column 3 </h3>
            <span> column 3 content </span>
          </div>
        </div>
    )
  }
}

export default UserPage;
