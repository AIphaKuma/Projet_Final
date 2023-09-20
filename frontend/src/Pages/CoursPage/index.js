import React, {useState,useEffect} from 'react';
import TabsCard from "../../Components/Tabs";
import MasterclassInfo from "../../Components/InfoCard";
import axios from 'axios';
import {useParams} from "react-router-dom";

import './style.scss'
import NavbarDashboard from "../../Components/NavbarDashboard";

function LessonPage() {


    const [activeTab, setActiveTab] = useState(0);
    const [masterclassInfo, setMasterclassesInfo] = useState([]); // Initialisé en tant qu'array vide
    const [lesson, setLesson] = useState(null);
    const { lessonId } = useParams();  // Utilisez destructuring pour extraire lessonId du résultat de useParams

    useEffect(() => {
        const fetchLesson = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/lessons/${lessonId}`);
                setLesson(response.data);
            } catch (err) {
                console.error('Error fetching lesson:', err);
            }
        };

        fetchLesson();
    }, [lessonId]);

    if (!lesson) {
        return <div>Loading...</div>;
    }

    const renderTab = () => {
        let element;
        if (activeTab === 0) {
            element = (
                <div className="masterclass-tab">
                    <div className="masterclass-tab-title">
                        <p className="content-subtitle gradient-text">
                            A propos de cette Masterclass
                        </p>
                        <p className="content-title gradient-text">
                            {lesson.timestamp}
                        </p>
                        <p className="content">Jacques Rouvier et son élève Julien Braidi travaillent à développer une trajectoire musicale et à jouer de manière expressive. De plus, la paire travaille sur des aspects plus techniques tels que jouer avec une bonne posture, doigté et créer un son plus profond en appliquant plus de pression sur les touches du bout des doigts.
                        </p>
                    </div>

                </div>
            )
        } else if (activeTab === 1) {
            element = (
                <>

                </>
            )
        }
        return element;
    }

    const renderMasterclassesInfo = () => {
        if (!masterclassInfo) {
            return null;
        }
        return <MasterclassInfo date={lesson.created_at} composer={lesson.composer} duree={lesson.duration} title={lesson.title} />;
    };

    return (
        <>
        <NavbarDashboard></NavbarDashboard>

    <div className="masterclass-cours">
            <div className="header">
                <p className="title gradient-text">{lesson.name}</p>
                <p className="subtitle"> {lesson.composer}</p>
                <p className="subtitle"> {lesson.created_by} Masterclass</p>

            </div>
            <div className="masterclass-body-container">
                <div className="video">
                    <iframe width="1060" height="650"         src={`https://www.youtube.com/embed/${lesson.video}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                    </iframe>
                </div>
                <div className="info">
                    {renderMasterclassesInfo()}
                </div>
            </div>
            <div>
                <TabsCard
                    title="Parrainage"
                    activeTab={activeTab}
                    renderTab={renderTab}
                    setActiveTab={setActiveTab}
                    tabs={["Masterclass", "Partitions"]}
                />
            </div>

        </div>
        </>
    );
}

export default LessonPage;