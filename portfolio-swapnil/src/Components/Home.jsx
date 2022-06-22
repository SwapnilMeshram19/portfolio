import React from "react";
import pPhoto from "../profile.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home =()=>{
    return (<div className="home-container">
        <img className="profile-photo" src={pPhoto} alt="ProfilePhoto"/>
        <div className="intro-text">
            <h5>Hi There !</h5>
            <h1><span style={{color:"white"}}>I'M</span> <span style={{color:"rgb(236,168,6)"}}>Swapnil Meshram</span></h1>
            <h4>Learner | Full Stack Web Developer</h4>
            <button >Resume</button><br/>
            <GitHubIcon color="primary" fontSize="large"/>
            <LinkedInIcon color="primary" fontSize="large"/>

        </div>

    </div>)
}

export default Home;