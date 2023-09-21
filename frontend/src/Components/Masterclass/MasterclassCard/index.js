import React,{useState} from 'react';
import Image from '../../../assets/image/index'
import { Link } from 'react-router-dom';


import './style.scss'

function MasterclassCard({image,title,instrument, creator, comment, level, lessons, onClick}) {

    const [isLessonsVisible, setIsLessonsVisible] = useState(false);
    const defaultImage = Image.MasterClass1;


    const toggleLessonsVisibility = () => {
        setIsLessonsVisible(!isLessonsVisible);
    };
    return (
        <div className="masterclass-card" onClick={onClick}>
            <img width="400px" height={"350px"} src={image || defaultImage} alt={"masterclassimage"}/>
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
                <div className="lessons" onClick={toggleLessonsVisibility}>

                        {isLessonsVisible ? 'Cacher les leçons' : 'Afficher les leçons'}

                    {isLessonsVisible && (
                        <div className="lessons-container">
                            <h3>Lessons:</h3>
                            <ul>
                                <ul>
                                    {lessons && Object.values(lessons).map((lesson, index) => (
                                        <li key={lesson.id} >
                                            <Link to={`/lessons/${lesson.id}`} className="lesson-link">  Name: {lesson.name}, Chapter: {lesson.Chapter}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </ul>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default MasterclassCard;