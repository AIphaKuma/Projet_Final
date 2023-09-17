import React, {useState} from 'react';


import './style.scss'

function TextCard({title, text, variant, margintop}) {

    return (
        <div className={`text-card-container text-card-container--background-${variant}`} style={{ marginTop: `${margintop}px` }}>
            <div className='text-card'>
                <div className='title-card-text'>
                    <h2>{title}</h2>
                </div>
                <div className='content-card-text'>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default TextCard;