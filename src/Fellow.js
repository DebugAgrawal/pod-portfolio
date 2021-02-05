import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './assets/css/fellow.css'

class Fellow extends React.Component {
  render() {
    return (
      <div>
          <div id="card">
            <img src="https://th.bing.com/th/id/OIP.6nCVjA0S936UiBlDUsov4QHaE9?pid=Api&rs=1" />
            <h2>Ondřej Page Bárta</h2>
            <p>Student of IT in Czech republic.</p>
            <p>
              Interested in Web technologies like HTML5, CSS3, JavaScript, PHP,
              MySQL, etc.
            </p>
            <p>Love Codepen.io and respect Chris Coyier. ;)</p>
            <span class="right bottom"><FaGithubSquare size={25} color="#333"/>  <FaLinkedin size={25} color="#333"/> <FaTwitterSquare size={25} color="#333"/>  <FaFacebookSquare size={25} color="#333"/></span>
          </div>
        </div>
    );
  }
}

export default Fellow