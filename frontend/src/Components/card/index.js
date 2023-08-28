import React, {useState} from 'react';
import Images from "../../assets/image/index.js";


import './style.scss'
import PwButton from "../button";
import ProgressBar from "../progressBar";

function Card({title, instrument, author, description, background}) {
    const [progress, setProgress] = useState(30);

    return (
        <div className="card-container"  >
            <div className="top-container" style={{backgroundImage:`url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className="top-text">
                    <p className="instrument"> <img src={Images.Circle} alt={"circle"}></img>{instrument}</p>
                    <p>{author}</p>
                </div>
                <h1>{title}</h1>
                <ProgressBar percentage={progress} ></ProgressBar>
            </div>
            <div className="play-button">
                <img src={Images.Play} alt={"Play"}/>
                <PwButton title={"Regarder la masterclass"}></PwButton>
            </div>
            <p className="card-description">{description}</p>

        </div>
    );
}

export default Card;