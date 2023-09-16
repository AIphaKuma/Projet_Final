import React, {useState} from 'react';


import './style.scss'

function AvantageCard({title, description, background, width}) {

    return (
        <div className="avantage-card-container" style={{width: `${width}`}} >
            <div className="avantage-container" style={{backgroundImage:`url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            </div>
            <div className="avantage-description">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default AvantageCard;