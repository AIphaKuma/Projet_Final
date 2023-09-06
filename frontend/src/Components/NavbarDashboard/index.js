import React from 'react';

import PwButton from "../../Components/button";

import Images from "../../assets/image/index.js";

import ProfilePicture from "../../Components/ProfilPicture";

import { useUser } from '../../Context/UserContext';
import Fontawesome from '../../api/Fontawesome';

import './style.scss';



function NavbarDashboard() {
    const { user, logout } = useUser();



    if (!user) {
        return <div>Veuillez vous connecter pour accéder au tableau de bord.</div>;
    }
    return (
        <div className="navbar">
            <Fontawesome/>
           <img src={Images.SalineLogo} alt={"logonavbar"}/>
            <div className="btn-container">
            <ProfilePicture link={Image.SalineLogo} role={user.role} username={user.username}></ProfilePicture>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-regular fa-bell"></i>  
            </div>
            <div className="btn-container2">
                <PwButton size={"small"} title={"reg"}></PwButton>
            </div>
        </div>
    );
}

export default NavbarDashboard;


