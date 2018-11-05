import React, { Component } from 'react';
import './UserCard.css';
import { Column, Row } from 'simple-flexbox';

class UserCard extends Component {

  render () {
    return (
      // <div className="User-card">
      //   <img className="User-icon" src={this.props.data.avatar_url} alt="user icon"/>
      //   <div className="User-details">
      //     <p>{this.props.data.name}</p>
      //     <p>{this.props.data.bio}</p>
      //     <p>Followers: {this.props.data.followers} | Following: {this.props.data.following}</p>
      //     <p>Public Repos: {this.props.data.public_repos}</p>
      //     <a className="User-blog" href={this.props.data.blog} target="_blank" rel="noopener noreferrer">Blog</a>
      //   </div>
      //   <div className="Button">
      //     <button type="submit" className="btn btn-primary" onClick={this.props.onReturn}>Return</button>
      //   </div>
      // </div>
      <div className="user-card">
        <Row vertical='center' horizontal='space-between'>
          <Column flexGrow={1} horizontal='center'>
            <img className="user-icon" src={this.props.data.avatar_url} alt="user icon"/>
            <div className="user-details">
              <p>{this.props.data.name}</p>
              <p>{this.props.data.bio}</p>
              <p>Followers: {this.props.data.followers} | Following: {this.props.data.following}</p>
              <p>Public Repos: {this.props.data.public_repos}</p>
            </div>
            <a className="user-blog" href={this.props.data.blog} target="_blank" rel="noopener noreferrer">Blog</a>
            <div className="return-button">
              <button type="submit" className="btn btn-primary" onClick={this.props.onReturn}>Return</button>
            </div>
          </Column>
          <Column flexGrow={1} horizontal='center'>
            <h3> Column 2 </h3>
            <span> column 2 content </span>
          </Column>
          <Column flexGrow={1} horizontal='center'>
            <h3> Column 3 </h3>
            <span> column 3 content </span>
          </Column>
        </Row>
      </div>
    )
  }
}

export default UserCard;
