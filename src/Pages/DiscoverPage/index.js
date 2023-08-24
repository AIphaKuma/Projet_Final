import React from 'react';
import './style.scss'
import PwButton from "../../Components/button";
import Navbar from "../../Components/Navbar";

function Discoverpage() {
    return (
        <div className="discover-page">
            <Navbar></Navbar>
            <div className="body">
                <h1 className="gradient-text">Etudier avec les meilleurs musiciens du monde</h1>
                <h2>Vivez des masterclasses vidéo immersives où que vous soyez. De nouvelles masterclasses ajoutéees chaque mois.</h2>
                <div className="btn-container">
                    <PwButton variant={"primary"} size={"large"} title={"Connectez-vous"} link={'/login'}></PwButton>
                    <PwButton variant={"border"} size={"large"} title={"Essaie Version Gratuite"}></PwButton>
                </div>
            </div>
        </div>
    );
}

export default Discoverpage;