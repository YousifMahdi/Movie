import React from "react";
import logoImage from  '../assets/cinelogo.png'
import '../styles.css';

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={logoImage} alt = "logo" />
        </div>
    )
}

export default Logo;