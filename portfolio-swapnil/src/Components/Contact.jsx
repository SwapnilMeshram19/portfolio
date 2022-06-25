import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
const Contact = () => {
  return (
    <div id="contact">
      <h1>Get in touch</h1>
      <a
        className="icons-container"
        href="https://mail.google.com/mail/?view=cm&to=swapnilm1908@gmail.com"
        target="_blank"
      >
        <EmailIcon className="icon" />
        <div className="icon-text"> Swapnilm1908@gmail.com</div>
      </a>
      <div className="icons-container">
        <CallIcon className="icon" />
        <div className="icon-text">9595183013</div>
      </div>

      <div className="icon-container">
        <a href="https://github.com/SwapnilMeshram19" target="_blank">
          <GitHubIcon className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/swapnil-meshram-37a715167" target="_blank">
          <LinkedInIcon className="icon" />
        </a>
        <a href="https://twitter.com/swapnilm1908" target="_blank">
          <TwitterIcon className="icon"  />
        </a>
      </div>
    </div>
  );
};

export default Contact;
