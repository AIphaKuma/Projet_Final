import React from 'react';
import Images from "../../assets/image/index.js";


import './style.scss'
import PwButton from "../button";

function Card({title, instrument, author, description, background}) {
    return (
        <div className="card-container"  >
            <div className="top-container" style={{backgroundImage:`url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className="top-text">
                    <p>{instrument}</p>
                    <p>{author}</p>
                </div>
                <h1>{title}</h1>
            </div>
            <PwButton title={"Regarder la masterclass"}></PwButton>
            <p className="card-description">{description}</p>

        </div>
    );
}

export default Card;