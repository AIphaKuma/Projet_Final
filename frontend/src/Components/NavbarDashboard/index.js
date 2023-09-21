import React from 'react';

import PwButton from "../../Components/button";

import Images from "../../assets/image/index.js";
import MiniProfile from "../../Components/MiniProfil";
import ProfilePicture from "../../Components/ProfilPicture";

import { useUser } from '../../Context/UserContext';
import Fontawesome from '../../api/Fontawesome';

import './style.scss';
import {Link} from "react-router-dom";



function NavbarDashboard() {
    const { user, logout } = useUser();



    if (!user) {
        return null;
    }
    return (
        <div className="navbar">
            <Fontawesome/>
            <Link to={"/dashboard"}><img src={Images.SalineLogo} alt={"logonavbar"}/></Link>
            <div className="btn-container">
            <ProfilePicture link={Image.SalineLogo} role={user.role} username={user.username}></ProfilePicture>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-bell"></i>  
            </div>
            <div className="btn-container2">
                <MiniProfile link={Image.SalineLogo} username={user.username}></MiniProfile>
            </div>
        </div>
    );
}

export default NavbarDashboard;


