import React, { Component } from 'react';
import '../css/UserPage.css';
import UserProfile from './UserProfile.js';
import UserRepos from './UserRepos.js';
import VerticalLine from './VerticalLine.js';

class UserPage extends Component {

  constructor (props) {
    super(props);

    this.state = {
      repoSelected: false,
      title: "View user repo"
    };

    this.onSelelectRepo = this.onSelelectRepo.bind(this);
  }

  async onSelelectRepo(repoKey, repoDict) {
    //console.log("Repo selected " + repoKey + "[" + repoDict[repoKey] + "]");
    this.setState({title: repoDict[repoKey]});

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
          {this.state.repoSelected && <UserRepos owner={this.props.userData.login} repo={this.state.title}/>}
        </div>
    )
  }
}

export default UserPage;
