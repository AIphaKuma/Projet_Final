// Dashboard.js
import React from 'react';
import Image from "../../assets/image";



import './style.scss'
import CircleProgressBar from "../CircleProgressBar";


function SessionCard({title,pourcentage, date,image}) {

    const backgroundImageUrl = image || Image.MasterClass1 ;

    const sessionCardContainerStyle = {
        backgroundImage:`url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backdropFilter: 'blur(20px)'
    };

    return (
        <div className="session-card-container1" style={sessionCardContainerStyle} >
            <div className={"session-card-container"} style={{backdropFilter: 'blur(2px)'}}>
                <div className="session-card-text" >
                    <div className="session-card-title">
                        {title}
                    </div>
                    <div className="session-card-date">
                        {date}
                    </div>
                </div>
                <CircleProgressBar percentage={pourcentage}></CircleProgressBar>
            </div>




        </div>
    );
}

export default SessionCard;
