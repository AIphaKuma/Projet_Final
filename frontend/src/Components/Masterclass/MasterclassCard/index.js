import React from 'react';
import Image from '../../../assets/image/index'
import './style.scss'

function MasterclassCard({image,title,duration, creator, description, lvl}) {
    return (
        <div className="masterclass-card">
            <img src={image} alt={"masterclassimage"}/>
            <div className="masterclass-card-text">
                <p className="masterclass-creator">{creator}</p>
                <p className="masterclass-title">{title}</p>
                <div className="masterclass-info">
                    <div className="masterclass-lvl">
                        <img src={Image.Circle}/>
                        <p>Niveau</p>
                    </div>
                    <div className="masterclass-duration">
                        <img src={Image.Circle}/>
                        <p>{duration}</p>
                    </div>
                </div>
                <p className="masterclass-description">In this session, pianist Jacques Rouvier and his student Julien Braidi work on guiding and determining the trajectory of the piece.</p>
            </div>
        </div>
    );
}

export default MasterclassCard;