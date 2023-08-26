import React from 'react';
import PwButton from "../../Components/button";
import Navbar from "../../Components/Navbar";

import Images from "../../assets/image/index.js";

import './style.scss'
import Partner from "../../Components/partner";
import Card from "../../Components/card";



function Discoverpage() {
    return (
        <div className="discover-page">
            <Navbar></Navbar>
            <div className="body">
                <div className="container">
                    <div className="text-container">
                        <h1 className="gradient-text">Etudier avec les meilleurs musiciens du monde</h1>
                        <h2>Vivez des masterclasses vidéo immersives où que vous soyez. De nouvelles masterclasses ajoutéees chaque mois.</h2>
                    </div>
                    <div className="btn-container">
                        <PwButton variant={"primary"} size={"large"} title={"Connectez-vous"} link={'/login'}></PwButton>
                        <PwButton variant={"border"} size={"large"} title={"Essaie Version Gratuite"}></PwButton>
                    </div>
                </div>
                <Partner logo={Images.SalineLogo}></Partner>
                <div className="container2">
                    <div className="">

                    </div>
                    <div className="cards-container">
                        <Card title={"Voici le titre test"} instrument={"piano"} author={"nathan"} description={"nreijznvinvpr zeiprj vnpzerjv bzeprivnpezmezierzbnrezupmnvzjeiuberz"} background={"https://imgs.search.brave.com/_nzEOD2jiGMagB5GwxxToXNmItqcwGwyl6wiBHeNbvw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMTUxNTY2NDEz/My5qcGc"}></Card>
                        <Card title={"Voici le titre test"} instrument={"piano"} author={"nathan"} description={"nreijznvinvpr zeiprj vnpzerjv bzeprivnpezmezierzbnrezupmnvzjeiuberz"}></Card>
                        <Card title={"Voici le titre test"} instrument={"piano"} author={"nathan"} description={"nreijznvinvpr zeiprj vnpzerjv bzeprivnpezmezierzbnrezupmnvzjeiuberz"}></Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Discoverpage;