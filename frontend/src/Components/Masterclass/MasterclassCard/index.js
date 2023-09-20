import React,{useState} from 'react';
import Image from '../../../assets/image/index'
import { Link } from 'react-router-dom';
import axios from 'axios';



import './style.scss'

function MasterclassCard({image,title,instrument, creator, comment, level, lessons, onClick}) {

    const [isLessonsVisible, setIsLessonsVisible] = useState(false);

    const toggleLessonsVisibility = () => {
        setIsLessonsVisible(!isLessonsVisible);
    };

    const LikeButton = ({ masterclassId, initialCount, initiallyLiked }) => {
        const [likeCount, setLikeCount] = useState(initialCount);
        const [hasLiked, setHasLiked] = useState(initiallyLiked);
      
      
        const toggleLike = async () => {
          try {
            const response = await axios.post(`/masterclass/like/${masterclassId}`);
            setLikeCount(response.data.likes);
            setHasLiked(!hasLiked);
          } catch (error) {
            console.error('Une erreur est survenue lors du like:', error);
          }
        };
      
    return (
        <div className="masterclass-card" onClick={onClick}>
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
                    <button onClick={toggleLessonsVisibility}>
                        {isLessonsVisible ? 'Cacher les leçons' : 'Afficher les leçons'}
                    </button>
                    <button onClick={toggleLike}>
                        {hasLiked ? 'Retirer le like' : 'Ajouter un like'} ({likeCount})
                    </button>
                    {isLessonsVisible && (
                        <div className="lessons-container">
                            <h3>Lessons:</h3>
                            <ul>
                                <ul>
                                    {lessons && Object.values(lessons).map((lesson, index) => (
                                        <li key={lesson.id} >
                                            <Link to={`/lessons/${lesson.id}`} className="lesson-link"> Lesson ID: {lesson.id}, Name: {lesson.name}, Chapter: {lesson.Chapter}</Link>
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
};
}

export default MasterclassCard;