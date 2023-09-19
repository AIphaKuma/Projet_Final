import React, {useState,useEffect} from 'react';
import TabsCard from "../../Components/Tabs";
import MasterclassInfo from "../../Components/InfoCard";
import axios from 'axios';
import {useParams} from "react-router-dom";

import './style.scss'

function LessonPage({description, title, subtitle,partition, match}) {


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
                        <p className="content-title gradient-text3">
                            {lesson.name}
                        </p>
                        <p className="content-subtitle">
                            A propos de cette Masterclass
                        </p>
                        <p className="content">{lesson.content}</p>
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
        // Vérification de l'existence de masterclass avant le mappage
        if (!masterclassInfo) {
            return null;
        }
        return masterclassInfo.map(n => <MasterclassInfo masterclassInfo={n} key={n.id} title={n.name}  image={n.image} description={n.description} />);
    };

    return (
        <div className="masterclass-cours">
            <div>
                <p className="title gradient-text">Partita No. 2 </p>
                <p className="subtitle"> Johann Sebastian Bach Jacques Rouvier's masterclass</p>
            </div>
            <div className="masterclass-body-container">
                <div className="video">
                    <iframe width="860" height="550"         src={`https://www.youtube.com/embed/${lesson.video}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
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
    );
}

export default LessonPage;