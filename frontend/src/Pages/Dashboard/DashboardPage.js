// Dashboard.js
import React from 'react';
import { useUser } from '../../Context/UserContext';
import Discovercard from "../../Components/discovercard";

import ProfilePicture from "../../Components/ProfilPicture";
import SessionCard from "../../Components/SessionCard";

import NavbarDashboard from "../../Components/NavbarDashboard";

import Image from "../../assets/image";

import './style.scss'



function Dashboard() {

        return <div className="">
                <NavbarDashboard></NavbarDashboard>
                <div classNamme="dashboard-global-container">

                        <div className='left-container'>
                                <div className="dashboard-category">Dashboard</div>
                        </div>

                        <div className="dashboard-center">
                                <div className="dashboard-category">A découvrir</div>
                                <Discovercard title={"test"} ></Discovercard>
                                <div className="dashboard-category">Vos cours</div>
                                <SessionCard title={"Concerto  No.5 in A Majorr"} date={"23/01/10"} pourcentage={24}></SessionCard>

                                <div className="dashboard-category"> Dernier Cours Publier</div>
                                <div className="dashboard-category">Cours Terminé</div>
                        </div>

                        <div className="right-container">
                                <div className="dashboard-category">Messagerie</div>
                                <div className="dashboard-category">Calendrier</div>
                        </div>
                        
                </div>
        </div>


}

export default Dashboard;
