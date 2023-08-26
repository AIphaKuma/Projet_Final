import React from 'react';
import Images from "../../assets/image/index.js";
import './style.scss'

import PwButton from "../button";

function Navbar() {
    return (
        <div className="navbar">
           <img src={Images.SalineLogo} alt={"logonavbar"}/>
            <div className="btn-container">
                <PwButton variant={"primary"} size={"large"} title={"Connectez-vous"} link={'/login'}></PwButton>
                <PwButton variant={"secondary"} size={"large"} title={"Essaie Version Gratuite"}></PwButton>
            </div>
        </div>
    );
}

export default Navbar;