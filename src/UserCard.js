import React, { Component } from 'react';
import './UserCard.css';
import { DropdownButton, MenuItem } from 'react-bootstrap';
const octokit = require('@octokit/rest')();

class UserCard extends Component {

  constructor (props) {
    super(props);

    this.state = {
      repoSelected: false,
      repoDict: [],
    };

    this.generateMenuItems = this.generateMenuItems.bind(this);
    this.onSelelectRepo = this.onSelelectRepo.bind(this);
  }

  generateMenuItems = (repoData) => {

    let menuItems = [];
    let repoDictBuffer = [];

    // Loop over all repos creating a menu item for each
    for (var i = 0; i < repoData.length; i++) {
      //console.log(repoData[i].name);
      menuItems.push(<MenuItem eventKey={i} onSelect={this.onSelelectRepo}>{repoData[i].name}</MenuItem>);
      repoDictBuffer.push([repoData[i].name]);
    }

    //console.log(repoDictBuffer);
    this.repoDict = repoDictBuffer;
    return menuItems;
  }

  onSelelectRepo = (repoKey) => {
    console.log("Repo selected " + repoKey);
    console.log(this.repoDict[repoKey]);

    //Get the given repo
    octokit.repos.get({owner: this.props.userData.login, repo: this.repoDict[repoKey][0]}).then(result => {
      console.log("Language => " + result.data.language);
    });
  }

  render () {
    return (
        <div className="container">
          <div className="g grid-45">
            <div className="user-card">
              <img className="user-icon" src={this.props.userData.avatar_url} alt="user icon"/>
              <div className="user-details">
                <p>{this.props.userData.name}</p>
                <p>{this.props.userData.bio}</p>
                <p>Followers: {this.props.userData.followers} | Following: {this.props.userData.following}</p>
                <p>Public Repos: {this.props.userData.public_repos}</p>
              </div>
              <a className="user-blog" href={this.props.userData.blog} target="_blank" rel="noopener noreferrer">Blog</a>
              <div className="repo-dropdown">
                  <DropdownButton title="View user repo" id="dropdown-size-medium">
                    {this.generateMenuItems(this.props.repoData)}
                  </DropdownButton>
              </div>
              <div className="return-button">
                <button type="submit" className="btn btn-primary" onClick={this.props.onReturn}>Return</button>
              </div>
            </div>
          </div>
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

export default UserCard;
