// Dashboard.js
import React from 'react';




import './style.scss'
import Image from "../../assets/image";


function ProfilePicture({link,username,role, notifications}) {
    const renderrole = () =>{
        if ( role === 2 ) {
            return ("Profils Etudiant")
        }
        else {
            return ("Profils Professeur")
        }
    }

    return (
        <div className="profile-picture-container">
            <div className="circle">
                <div className="notifications">
                    <span className="number">{notifications}</span>
                </div>
                <img  src={link || Image.Profile} alt={"profilepicture"} className="circle-image"/>
            </div>
            <div className="profile-picture-text">
                <p className="profile-picture-username">Bonjour ,{username}</p>
                <p className="profile-picture-role">{renderrole()}</p>
            </div>


        </div>
    );
}

export default ProfilePicture;
