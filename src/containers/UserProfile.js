import React, { Component } from 'react';
import '../css/UserProfile.css';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class UserProfile extends Component {

  constructor (props) {
    super(props);

    this.generateMenuItems = this.generateMenuItems.bind(this);
    this.handleRepoSelection = this.handleRepoSelection.bind(this);
  }

  generateMenuItems = (repoData) => {

    let menuItems = [];
    let repoDictBuffer = [];

    // Loop over all repos creating a menu item for each
    for (var i = 0; i < repoData.length; i++) {
      //console.log(repoData[i].name);
      menuItems.push(<MenuItem eventKey={i} onSelect={this.handleRepoSelection}>{repoData[i].name}</MenuItem>);
      repoDictBuffer.push([repoData[i].name]);
    }

    //console.log(repoDictBuffer);
    this.repoDict = repoDictBuffer;
    return menuItems;
  }

  handleRepoSelection = (repoKey) => {
    this.props.onSelect(repoKey, this.repoDict);
  }

  render () {
    return (
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
              <DropdownButton title={this.props.title} id="dropdown-size-medium">
                {this.generateMenuItems(this.props.repoData)}
              </DropdownButton>
          </div>
          <div className="return-button">
            <button type="submit" className="btn btn-primary" onClick={this.props.onReturn}>Return</button>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile;
