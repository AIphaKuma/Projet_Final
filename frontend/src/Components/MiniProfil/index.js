import React from 'react';




import './style.scss'
import Fontawesome from '../../api/Fontawesome';


function MiniProfile({link,username, notifications}) {

    return (
        <div className="mini-profile-picture-container">
            <Fontawesome/>
            <div className="mini-circle">
                <div className="mini-notifications">
                    <span className="mini-number">{notifications}</span>
                </div>
                <img  src={link} alt={"profilepicture"} className="circle-image"/>
            </div>
            <div className="mini-profile-picture-text">
                <span className="mini-profile-picture-username">{username}</span>
                <i className="fa-solid fa-chevron-down"></i>
            </div>


        </div>
    );
}

export default MiniProfile;
