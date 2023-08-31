import React from 'react';
import Image from "../../assets/image";


import './style.scss'
import PwButton from "../button";


function Footer() {

    return (
        <div className="footer">
            <img src={Image.SalineLogo}/>
            <div className={"category-container"}>
                <h2> Academy Saline Royal</h2>
                <a> A propos</a>
                <a>Contact</a>
                <div className="mail-input">
                    <input type={"text"} placeholder={"Entrez votre mail"}/>
                    <PwButton  size={"medium"} variant={"primary"}></PwButton>
                </div>

            </div>


        </div>
    );
}

export default Footer;