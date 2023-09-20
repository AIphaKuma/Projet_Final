import React from 'react';
import './style.scss'

function MasterclassInfo({image,title,content,composer,instrument,duree,date, creator, description, lvl}) {



    return (
        <div className="masterclass-info-card">
            <div className="title"> Informations</div>
            <div className="masterclass-info-text">
                <div>
                    <img src={image} alt={"info-image"}/>
                    <p>Compositeur :</p>
                    <p>{composer}</p>
                </div>
                <div>
                    <img src={image} alt={"info-image"}/>
                    <p>Titre :</p>
                    <p>{title}</p>
                </div>
                <div>
                    <img src={image} alt={"info-image"}/>
                    <p>Durée :</p>
                    <p>{duree}</p>
                </div>
                <div>
                    <img src={image} alt={"info-image"}/>
                    <p>Date :</p>
                    <p>{date}</p>
                </div>
            </div>

        </div>
    );
}

export default MasterclassInfo;