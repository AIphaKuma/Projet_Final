import React from 'react';


import './style.scss'

import PwButton from "../button";

function Partner({logo}) {
    return (
        <div className="partner-container">
            <h1 className="partner-text">Les partnaires de l'Académie Saline Royale :</h1>
            <div className="logo-container">
                <img src={logo} alt={"logo-partner"}/>
                <img src={logo} alt={"logo-partner"}/>

            </div>


        </div>
    );
}

export default Partner;