import React from 'react';

import PwButton from "../button";
import {Link} from "react-router-dom";

import './style.scss'

function DiscoverCard({title}) {

    return (

            <div className="discovercard-container">
                    <h1 className="discovercard-text">{title}</h1>
                   <Link to={"/discover"}><PwButton title={"Découvre maintenant"} variant={"primary"} size={"large"}> </PwButton></Link>

</div>

    );
}

export default DiscoverCard;