import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './assets/css/fellow.css'

class Fellow extends React.Component {
  render(props) {
    return (
      <div>
        <div id="card">
          <img alt="profilePicture" src={this.props.dataprop.profile} />
          <h2>{this.props.dataprop.name} {this.props.dataprop.ID}</h2>
          <p>{this.props.dataprop.kind}</p>
          <p>
            {this.props.dataprop.tech}
          </p>
          <p>Love Hackathons and like helping Helping Others ;)</p>
          <span className="right bottom">
          <a href={`https://github.com/${this.props.dataprop.github_username}`}> <FaGithubSquare size={25} color="#333" /></a>
          <a href={`https://linkedin.com/in/${this.props.dataprop.linkedin_username}`}> <FaLinkedin size={25} color="#333" /></a> 
          <a href={`https://twitter.com/${this.props.dataprop.twitter_username}`}> <FaTwitterSquare size={25} color="#333" /></a>  
          <a href={`https://facebook.com/${this.props.dataprop.facebook_username}`}> <FaFacebookSquare size={25} color="#333" /></a>
          </span>
        </div>
      </div>
    );
  }
}

export default Fellow