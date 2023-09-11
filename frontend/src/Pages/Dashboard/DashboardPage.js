// Dashboard.js
import React from 'react';
import { useUser } from '../../Context/UserContext';
import Discovercard from "../../Components/discovercard";

import ProfilePicture from "../../Components/ProfilPicture";
import SessionCard from "../../Components/SessionCard";


import NavbarDashboard from "../../Components/NavbarDashboard";

import Image from "../../assets/image";
import Fontawesome from '../../api/Fontawesome';
import './style.scss'
import MiniProfile from '../../Components/MiniProfil';



function Dashboard() {

        return <div className="">
                <NavbarDashboard></NavbarDashboard>
                <div className="dashboard-global-container">

                        <div className='dashboard-left'>
                                <div className="icon-nav1">
                                    <Fontawesome />
                                    <i className="fa-solid fa-layer-group">
                                    </i>
                                    <div className="dashboard-category">Dashboard</div>
                                </div>
                                <div className="icon-nav2">
                                    <Fontawesome />
                                    <i class="fa-solid fa-arrow-trend-up">
                                    </i>
                                    <div className="dashboard-category">Tendance</div>
                                </div>
                                <div className="icon-nav3">
                                    <Fontawesome />
                                    <i class="fa-regular fa-bell">
                                    </i>
                                    <div className="dashboard-category">Notifications</div>
                                </div>
                                <div className="icon-nav4">
                                    <Fontawesome />
                                    <i class="fa-regular fa-message">
                                    </i>
                                    <div className="dashboard-category">Messagerie</div>
                                </div>
                                <div className="icon-nav5">
                                    <Fontawesome />
                                    <i class="fa-regular fa-calendar">
                                    </i>
                                    <div className="dashboard-category">Rendez-vous</div>
                                </div>
                                <div className="icon-nav6">
                                    <Fontawesome />
                                    <i class="fa-solid fa-arrow-right-from-bracket">
                                    </i>
                                    <div className="dashboard-category">Déconnexion</div>
                                </div>

                        </div>

                        <div className="dashboard-center">
                                <div className="dashboard-category">A découvrir</div>
                                <div className="discovercard-box">
                                <Discovercard title={"Torem ipsum  "} ></Discovercard>
                                </div>
                                <div className="dashboard-category">Vos cours</div>
                                <div className="sessioncard-box">
                                <SessionCard title={"Concerto  No.5 in A Majorr"} date={"23/01/10"} pourcentage={24}></SessionCard>
                                <SessionCard title={"Concerto  No.5 in A Majorr"} date={"23/01/10"} pourcentage={24}></SessionCard>
                                <SessionCard title={"Concerto  No.5 in A Majorr"} date={"23/01/10"} pourcentage={24}></SessionCard>
                                </div>
                                <div className="dashboard-category"> Dernier Cours Publier</div>
                                <div className="dashboard-category">Cours Terminé</div>
                        </div>

                        <div className="dashboard-right">
                                <div className="accesprenium-box">
                                  Torem ipsum dolor sit  ipsum dolor
                                  <div className="photo-prenium"></div>
                                </div>
                                <div className="messagerie-box">
                                  <div className="dashboard-category">Messagerie</div>
                                </div>
                                <div className="calendrier-box">
                                  <div className="dashboard-category">Calendrier</div>
                                </div>
                        </div>
                        
                </div>
        </div>


}

export default Dashboard;
