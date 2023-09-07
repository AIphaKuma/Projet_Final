import React from 'react';

import PwButton from "../../Components/button";

import Images from "../../assets/image/index.js";

import ProfilePicture from "../../Components/ProfilPicture";

import { useUser } from '../../Context/UserContext';



function NavbarDashboard() {
    const { user, logout } = useUser();



    if (!user) {
        return <div>Veuillez vous connecter pour accéder au tableau de bord.</div>;
    }
    return (
        <div className="navbar">
           <img src={Images.SalineLogo} alt={"logonavbar"}/>
            <div className="btn-container">
            <ProfilePicture link={Image.SalineLogo} role={user.role} username={user.username}></ProfilePicture>
                <PwButton size={"large"} title={"recherche"} ></PwButton>
                <PwButton size={"large"} title={"Essaie Version Gratuite"}></PwButton>
            </div>
            <div className="btn-container2">
                <PwButton size={"small"} title={"reg"}></PwButton>
            </div>
        </div>
    );
}

export default NavbarDashboard;


