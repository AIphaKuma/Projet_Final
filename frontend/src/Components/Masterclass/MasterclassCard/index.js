import React from 'react';
import Image from '../../../assets/image/index'
import './style.scss'

function MasterclassCard({image,title,instrument, creator, comment, level, lessons}) {
    return (
        <div className="masterclass-card">
            <img src={image} alt={"masterclassimage"}/>
            <div className="masterclass-card-text">
                <p className="masterclass-creator">{creator}</p>
                <p className="masterclass-title">{title}</p>
                <div className="masterclass-info">
                    <div className="masterclass-lvl">
                        <img src={Image.Circle}/>
                        <p>{level}</p>
                    </div>
                    <div className="masterclass-duration">
                        <img src={Image.Circle}/>
                        <p>{instrument}</p>
                    </div>
                </div>
                <p className="masterclass-description">{comment}</p>
                <div className="lessons">
                    <h3>Lessons:</h3>
                    <ul>
                        <ul>
                            {lessons && Object.values(lessons).map((lesson, index) => (
                                <li key={lesson.id}>
                                    Lesson ID: {lesson.id}, Name: {lesson.name}, Chapter: {lesson.Chapter}
                                </li>
                            ))}
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MasterclassCard;