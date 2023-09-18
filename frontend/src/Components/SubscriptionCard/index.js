import React, {useState} from 'react';


import './style.scss'
import PwButton from '../button';

function SubscriptionCard({title, price, size, advantage1, advantage2, advantage3, advantage4, advantage5, advantage6}) {

    return (
        <div className={`subscription-card-container`}>
            <div className={`subscription-description subscription-description--${size}`}>
                <div className='top-card'>
                    <h2>{title}</h2>
                    <h3>{price}</h3>
                    <PwButton variant={"primary"} size={"large"} title={"Connectez-vous"} link={'/login'}></PwButton>
                </div>
                <div className='bottom-card'>
                    <ul>
                    {advantage1 && <li><p>{advantage1}</p></li>}
                    {advantage2 && <li><p>{advantage2}</p></li>}
                    {advantage3 && <li><p>{advantage3}</p></li>}
                    {advantage4 && <li><p>{advantage4}</p></li>}
                    {advantage5 && <li><p>{advantage5}</p></li>}
                    {advantage6 && <li><p>{advantage6}</p></li>}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionCard;