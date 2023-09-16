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
                        <li>
                            <p>{advantage1}</p>
                        </li>
                        <li>
                            <p>{advantage2}</p>
                        </li>
                        <li>
                            <p>{advantage3}</p>
                        </li>
                        <li>
                            <p>{advantage4}</p>
                        </li>
                        <li>
                            <p>{advantage5}</p>
                        </li>
                        <li>
                            <p>{advantage6}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionCard;