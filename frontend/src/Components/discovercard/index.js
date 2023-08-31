import React, {useState} from 'react';


import './style.scss'
import PwButton from "../button";

function DiscoverCard({title, instrument, author, description, background}) {
    const [progress, setProgress] = useState(30);

    return (

            <div className="discovercard-container">
                    <h1 className="discovercard-text">Torem ipsum dolor sit  ipsum </h1>
                    <PwButton title={"Découvre maintenant"} variant={"primary"} size={"large"}> </PwButton>
            </div>

    );
}

export default DiscoverCard;