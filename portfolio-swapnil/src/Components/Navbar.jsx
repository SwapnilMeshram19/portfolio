import React from "react";
import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar =()=>{
    return (
    <div className="navbar-container">
        <div className="links">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/About">About</Link>
            <Link className="link" to="/Skills">Skills</Link>
            <Link className="link" to="/Projects">Projects</Link>
            <Link className="link" to="/Contact">Contact</Link>
        </div>
        
    </div>
    )
}

export default Navbar;