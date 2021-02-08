import React from "react";
import './assets/css/project.css'

class Project extends React.Component {
  render(props) {
    return (
      <div>
        <div id="cardp">
          <img alt="profilePicture" src={this.props.dataprop.image} />
          <h2>{this.props.dataprop.name}</h2>
          <p>{this.props.dataprop.information}</p>
          <p className="bottom">
            {this.props.dataprop.tech}
          </p>
        </div>
      </div>
    );
  }
}

export default Project