import React from 'react';
import './style.scss'

function MasterclassInfo({image,title,content, creator, description, lvl}) {



    return (
        <div className="masterclass-info-card">
            <div>
                <img src={image} alt={"info-image"}/>
                <p>{title}</p>
                <p> {content}Johann Sebastian Bach Jacques Rouvier's masterclass</p>
            </div>
        </div>
    );
}

export default MasterclassInfo;