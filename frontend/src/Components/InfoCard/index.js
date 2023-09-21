import React from 'react';
import Image from "../../assets/image";


import './style.scss'

function MasterclassInfo({image,title,composer,duree,date}) {

    function secondsToMinutes() {
        const minutes = Math.floor(duree / 60);
        const remainingSeconds = duree % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    const formattedTime = secondsToMinutes(duree);
    console.log(formattedTime);



    return (
        <div className="masterclass-info-card">
            <div className="title"> Informations</div>
            <div className="masterclass-info-text">
                <div className={"info-image-text"}>
                    <img src={image || Image.JeanBach}   style={{ borderRadius: '50%', width: '20px', height: '20px' }}
                         alt={"info-image"}/>
                    <p>Compositeur :</p>
                    <p>{composer}</p>
                </div>
                <div className={"info-image-text"}>
                    <img src={image} alt={"info-image"} style={{ borderRadius: '50%', width: '20px', height: '20px' }} />
                    <p>Titre :</p>
                    <p>{title}</p>
                </div>
                <div className={"info-image-text"}>
                    <img src={image } alt={"info-image"} style={{ borderRadius: '50%', width: '20px', height: '20px' }}/>
                    <p>Durée :</p>
                    <p>{formattedTime}</p>
                </div>
                <div className={"info-image-text"}>
                    <img src={image} alt={"info-image"} style={{ borderRadius: '50%', width: '20px', height: '20px' }}/>
                    <p>Date :</p>
                    <p>{date}</p>
                </div>
            </div>

        </div>
    );
}

export default MasterclassInfo;