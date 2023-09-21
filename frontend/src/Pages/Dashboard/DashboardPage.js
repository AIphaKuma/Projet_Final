// Dashboard.js
// import React from 'react';
import React, { useState } from 'react';
import Discovercard from "../../Components/discovercard";

import SessionCard from "../../Components/SessionCard";
import NavbarDashboard from "../../Components/NavbarDashboard";
import Fontawesome from '../../api/Fontawesome';

import './style.scss'



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
                                    <div className="dashboard-category">Dashboard</div>
                                </div>
                                <div className={`icon-nav2 ${isSubMenuOpen ? 'sub-menu-open' : ''}`} onClick={toggleSubMenu}>
                                        <div className= "box-icon2">
                                        <i className="fa-solid fa-video"></i>
                                        <div className="dashboard-category">Masterclass</div>
                                        </div>
                                    
                                    <div className={subMenuClasses}>
                                        <div className="sub-menu-item">Les plus vues</div>
                                        <div className="sub-menu-item">Les mieux notées</div>
                                        <div className="sub-menu-item">Les dernieres publiées</div>
                                    </div>
                                    </div>
                                               
                                
                                <div className="icon-nav3">
                                    <i className="fa-regular fa-bell">
                                    </i>
                                    <div className="dashboard-category">Notifications</div>
                                </div>
                                <div className="icon-nav4">
                                    <i className="fa-regular fa-message">
                                    </i>
                                    <div className="dashboard-category">Messagerie</div>
                                </div>
                                <div className="icon-nav5">
                                    <i className="fa-regular fa-calendar">
                                    </i>
                                    <div className="dashboard-category">Rendez-vous</div>
                                </div>
                                <div className="icon-nav6">
                                    <i className="fa-solid fa-arrow-right-from-bracket">
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
