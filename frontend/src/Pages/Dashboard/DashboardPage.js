import React, {useEffect, useState} from 'react';
import Discovercard from "../../Components/discovercard";
import {Link} from "react-router-dom";

import SessionCard from "../../Components/SessionCard";
import NavbarDashboard from "../../Components/NavbarDashboard";
import Fontawesome from '../../api/Fontawesome';
import LogoutButton from "../../Components/LogoutButton";
import axios from "axios";

import './style.scss'




function Dashboard() {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [error, setError] = useState(null);
    const [masterclass, setMasterclasses] = useState([]);

    const getMasterclass = async () => {
        try {
            const response = await axios.get('http://localhost:8080/masterclass/');
            setMasterclasses(response.data);
            console.log('Response from server:', response.data);
        } catch (err) {
            console.error('Error during fetching masterclasses:', err);
            setMasterclasses([]);

            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError(err.message);
            }
        }
    };

    useEffect( () => {
        getMasterclass()
    },[]);

    const renderMasterclasses = () => {
        const indexOfLastMasterclass = 4;
        const currentMasterclasses = masterclass.slice(0, indexOfLastMasterclass);

        if (!masterclass) {
            return null;
        }

        return currentMasterclasses.map((n) => (
            <SessionCard
                masterclass={n}
                key={n.id}
                title={n.name}
                date={n.created_at}
                pourcentage={[10]}
            />
        ));
    };
      
        const toggleSubMenu = () => {
          setIsSubMenuOpen(!isSubMenuOpen);
        };
      
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

                                        <div className="sub-menu-item" ><Link to="/masterclass">Les plus vues</Link></div>
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
                                    <div className="dashboard-category" ><LogoutButton></LogoutButton></div>
                                </div>

                        </div>

                        <div className="dashboard-center">
                                <div className="dashboard-category">A découvrir</div>
                                <div className="discovercard-box">
                                    <Discovercard title={"Découvrez notre offre prémium  "} > <Link to={"/discover"}></Link></Discovercard>
                                </div>
                                <div className="dashboard-category">Vos cours</div>
                                <div className="sessioncard-box">
                                    {renderMasterclasses()}
                                </div>
                                <div className="dashboard-category"> Dernier Cours Publier</div>
                                <div className="dashboard-category">Cours Terminé</div>
                        </div>

                        <div className="dashboard-right">
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
