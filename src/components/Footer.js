import React from "react";

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import {faLinkedin,faGithub} from "@fortawesome/free-brands-svg-icons";

import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

import "../styles/Footer.css";

//Contact Links

function Footer() {

  return (

  
    <div className="footer">

      <div className="socialMedia">

        {/* Linkedin account  */}

      <a href ="https://www.linkedin.com/in/ricky-pethick-449a82244/" target="blank">

        {/* Linkedin icon */}

        <FontAwesomeIcon icon={faLinkedin}/> 

        </a>

        {/* Github account link */} 

        <a href ="https://github.com/rpethick0207" target="blank">

          {/* Github icon */}

        
        <FontAwesomeIcon icon={faGithub}/>

        </a>

        {/* Email link */}

        <a href ="mailto:rpethick0207@gmail.com" target="blank">

          {/* Email icon */}

        <FontAwesomeIcon icon={faEnvelope}/>

        </a>

      </div>

      <p> &copy; 2022 Richard Pethick</p>
      
    </div>
  );
}

export default Footer;