import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedin,faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import "../styles/Footer.css";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href ="https://www.linkedin.com/in/ricky-pethick-449a82244/" target="blank">
        <FontAwesomeIcon icon={faLinkedin}/> 
        </a>
        <a href ="https://github.com/rpethick0207" target="blank">
        <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a href ="mailto:rpethick0207@gmail.com" target="blank">
        <FontAwesomeIcon icon={faEnvelope}/>
        </a>
      </div>
      <p> &copy; 2022 Richard Pethick</p>
    </div>
  );
}

export default Footer;