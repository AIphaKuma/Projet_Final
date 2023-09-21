import React, {useState,useEffect} from 'react';
import TabsCard from "../../Components/Tabs";
import MasterclassInfo from "../../Components/InfoCard";
import axios from 'axios';
import {useParams} from "react-router-dom";


import YoutubeVideoPlayer from "../../Components/YoutubePlayer";

import NavbarDashboard from "../../Components/NavbarDashboard";

import './style.scss'



function LessonPage() {

    const [activeTab, setActiveTab] = useState(0);
    const [masterclassInfo, setMasterclassesInfo] = useState([]);
    const [lesson, setLesson] = useState(null);
    const { lessonId } = useParams();

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
                        <p className="content">
                            {lesson.content}
                        </p>
                    </div>

                </div>
            )
        } else if (activeTab === 1) {
            element = (
                <>
                    <iframe
                        src={`${lesson.music_sheet}`}
                        title="Aperçu du PDF"
                        width="100%"
                        height="500px"
                    />

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

                    <YoutubeVideoPlayer video={lesson.video} timestamps={lesson.time_stamp.map((timestamp, index) => (
                        { startTime: timestamp.start_time, endTime: timestamp.end_time, label: timestamp.label }
                    ))} />



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