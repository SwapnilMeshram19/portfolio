import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const Navbar =()=>{
    return (
    <div className="navbar-container">
        <div className="links">
            <NavLink className="nav-link" to="/" >Home</NavLink>
            <NavLink className="nav-link" to="/About">About</NavLink>
            <NavLink className="nav-link" to="/Skills">Skills</NavLink>
            <NavLink className="nav-link" to="/Projects">Projects</NavLink>
            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        </div>
        
    </div>
    )
}

export default Navbar;