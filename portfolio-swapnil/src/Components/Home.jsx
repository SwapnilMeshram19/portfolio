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
            <button  className="resume-button" onClick={(event)=>{window.open("https://drive.google.com/file/d/1PvY2GjWNavb-9hz3MK4C51vM9ZAgZ2MI/view?usp=sharing")}}>Resume</button><br/>
            <GitHubIcon 
                onClick={(event)=>{window.open("https://github.com/SwapnilMeshram19")}} 
                color="primary" fontSize="large" 
                className="profile-icon"
                />
            <LinkedInIcon 
                onClick={(event)=>{window.open("https://www.linkedin.com/in/swapnil-meshram-37a715167")}}
                color="primary" fontSize="large" 
                className="profile-icon"
                />

        </div>

    </div>)
}

export default Home;