import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import Grid from "@mui/material/Grid";
const Contact = () => {
  return (
    <div id="contact">
      <h1>Get in touch</h1>
      <div className="contacts">
        <Grid
          container
          direction="row"
          alignItems="center"
          className="icons-grid"
        >
          <EmailIcon className="icons" />
          &nbsp; swapnilm1908@gmail.com
        </Grid>
      </div>
      <div>
        <Grid
          container
          direction="row"
          alignItems="center"
          className="icons-grid"
        >
          <Contact className="icons" />
          &nbsp; 9595183013
        </Grid>
      </div>
    </div>
  );
};

export default Contact;
