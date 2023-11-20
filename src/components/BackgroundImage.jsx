import React from "react";
import background from '../assets/backgroundImg.svg';
import "../styles.css";

const BackgroundImage = () => {
    return (
        <div className="body-container">
            <img src = {background} alt="background image" />
        </div>
    )
}

export default BackgroundImage;