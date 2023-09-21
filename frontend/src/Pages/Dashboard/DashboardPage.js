// Dashboard.js
// import React from 'react';
import React, { useState } from 'react';
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
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
      
        // Fonction pour basculer l'état du menu déroulant
        const toggleSubMenu = () => {
          setIsSubMenuOpen(!isSubMenuOpen);
        };
      
        // Ajoutez ou supprimez la classe "sub-menu-open" en fonction de isSubMenuOpen
        const subMenuClasses = `sub-menu ${isSubMenuOpen ? 'sub-menu-open' : ''}`;
      

        return <div className="">
            
                <NavbarDashboard></NavbarDashboard>
                <div className="dashboard-global-container">

                        <div className='dashboard-left'>
                                <div className="icon-nav1">
                                    <Fontawesome />
                                    <i className="fa-solid fa-layer-group">
                                    </i>
                                    <div className="dashboard-menu">Dashboard</div>
                                </div>
                                <div className={`icon-nav2 ${isSubMenuOpen ? 'sub-menu-open' : ''}`} onClick={toggleSubMenu}>
                                        <div className= "box-icon2">
                                        <i class="fa-solid fa-video"></i>
                                        <div className="dashboard-menu">Masterclass</div>
                                        </div>
                                    
                                    <div className={subMenuClasses}>
                                        <div className="sub-menu-item">Les plus vues</div>
                                        <div className="sub-menu-item">Les mieux notées</div>
                                        <div className="sub-menu-item">Les dernieres publiées</div>
                                    </div>
                                    </div>
                                               
                                
                                <div className="icon-nav3">
                                    <i class="fa-regular fa-bell">
                                    </i>
                                    <div className="dashboard-menu">Notifications</div>
                                </div>
                                <div className="icon-nav4">
                                    <i class="fa-regular fa-message">
                                    </i>
                                    <div className="dashboard-menu">Messagerie</div>
                                </div>
                                <div className="icon-nav5">
                                    <i class="fa-regular fa-calendar">
                                    </i>
                                    <div className="dashboard-menu">Rendez-vous</div>
                                </div>
                                <div className="icon-nav6">
                                    <i class="fa-solid fa-arrow-right-from-bracket">
                                    </i>
                                    <div className="dashboard-menu">Déconnexion</div>
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
                                 Rejoignez notre communauté mondiale de +100k membres 
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
