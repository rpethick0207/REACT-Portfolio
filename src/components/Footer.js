import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import IconButton from '@material-ui/core/IconButton';
import "../styles/Footer.css";


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <IconButton> <a href='https://www.linkedin.com/in/ricky-pethick-449a82244/'target='blank'>
        <LinkedInIcon />
        </a>
        <a href= 'mailto:rpethick0207@gmail.com?subject=subject text'target='blank'>
        <EmailIcon />
        </a>
        <a href = 'https://github.com/rpethick0207'target='blank'>
        <GithubIcon />
        </a>
        </IconButton>
      </div>
      <p> &copy; 2022 Richard Pethick</p>
    </div>
  );
}

export default Footer;