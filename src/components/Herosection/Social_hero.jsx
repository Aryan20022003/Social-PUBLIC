import React from "react";
import "./styleHero.css"

const sociaHero = function () {
    return (
        <div className="container">
            <div className="message">
                <h2>MANAGER</h2>
                <p>Manage all the post from <span className="One">ONE</span> Place</p>
            </div>
            <div className="Img visibility">
                <img src={require('./logo.png')} alt="logo" className="logo" />
            </div>
        </div>);
}

export default sociaHero;