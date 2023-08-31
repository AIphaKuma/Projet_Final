// Dashboard.js
import React from 'react';




import './style.scss'
import CircleProgressBar from "../CircleProgressBar";


function SessionCard({title,pourcentage, date}) {

    return (
        <div className="session-card-container">
            <div className="session-card-text">
                <div className="session-card-title">
                    {title}
                </div>
                <div className="session-card-date">
                    {date}
                </div>
            </div>
            <CircleProgressBar percentage={40}></CircleProgressBar>



        </div>
    );
}

export default SessionCard;
