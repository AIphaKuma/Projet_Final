import React from 'react';
import PwButton from "../../Components/button";
import Navbar from "../../Components/Navbar";

import Images from "../../assets/image/index.js";

import Partner from "../../Components/partner";
import Card from "../../Components/card";


import './style.scss'
import Footer from "../../Components/Footer";


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
                    <div className="text-container2">
                        <h2>Nos Masterclass</h2>
                        <h1>Découvrez le plus grand catalogue de masterclasses de musique classique</h1>
                    </div>
                    <div className="cards-container">
                        <Card title={"Voici le titre test"} instrument={"piano"} author={"nathan"} description={"nreijznvinvpr zeiprj vnpzerjv bzeprivnpezmezierzbnrezupmnvzjeiuberz"} background={Images.MasterClass1}></Card>
                        <Card title={"Voici le titre test"} instrument={"piano"} author={"nathan"} description={"nreijznvinvpr zeiprj vnpzerjv bzeprivnpezmezierzbnrezupmnvzjeiuberz"} background={Images.MasterClass1}></Card>
                        <Card title={"Voici le titre test"} instrument={"piano"} author={"nathan"} description={"nreijznvinvpr zeiprj vnpzerjv bzeprivnpezmezierzbnrezupmnvzjeiuberz"} background={Images.MasterClass1}></Card>
                    </div>
                </div>
                <div className="container3">
                    <div className="text-container3">
                        <h1>Morem ipsum dolor sit</h1>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                        <PwButton variant={"primary"} size={"large"} title={"Connectez-vous"} link={'/login'}></PwButton>
                    </div>
                    <img src={Images.Violon1} alt={'violon'}></img>
                    <div className="container3-bottom">
                        <p>.01</p>

                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Discoverpage;