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
            <img src="https://th.bing.com/th/id/OIP.Cvogu9sG2nhb9_yBPIMedAHaHa?pid=Api&rs=1"/>
            <h2>{this.props.dataprop.name} {this.props.dataprop.ID}</h2>
            <p>{this.props.dataprop.kind}</p>
            <p>
              Interested in Web technologies like HTML5, CSS3, JavaScript, ReactJS.
            
            </p>
            <p>Love Hackathons and is Helpful ;)</p>
            <span className="right bottom"><FaGithubSquare size={25} color="#333"/>  <FaLinkedin size={25} color="#333"/> <FaTwitterSquare size={25} color="#333"/>  <FaFacebookSquare size={25} color="#333"/></span>
          </div>
        </div>
    );
  }
}

export default Fellow