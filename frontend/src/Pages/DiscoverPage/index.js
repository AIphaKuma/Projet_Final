import React from 'react';
import PwButton from "../../Components/button";
import Navbar from "../../Components/Navbar";

import Images from "../../assets/image/index.js";

import Partner from "../../Components/partner";
import Card from "../../Components/card";


import './style.scss'
import Footer from "../../Components/Footer";
import AvantageCard from '../../Components/AvantageCard';
import SubscriptionCard from '../../Components/SubscriptionCard';
import TextCard from '../../Components/TextCard';


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
                </div>
                <div className="container3-puces">
                    <div className="puce">
                        <div className='line'></div>
                        <p className='number-puce'>01.</p>
                        <p className='title-puce'>Des masterclass</p>
                        <p className='content-puce'>De nouvelles vidéos disponibles chaque mois</p>
                    </div>
                    <div className="puce">
                        <div className='line'></div>
                        <p className='number-puce'>02.</p>
                        <p className='title-puce'>Des masterclass</p>
                        <p className='content-puce'>De nouvelles vidéos disponibles chaque mois</p>
                    </div>
                    <div className="puce">
                        <div className='line'></div>
                        <p className='number-puce'>03.</p>
                        <p className='title-puce'>Des masterclass</p>
                        <p className='content-puce'>De nouvelles vidéos disponibles chaque mois</p>
                    </div>
                    <div className="puce">
                        <div className='line'></div>
                        <p className='number-puce'>04.</p>
                        <p className='title-puce'>Des masterclass</p>
                        <p className='content-puce'>De nouvelles vidéos disponibles chaque mois</p>
                    </div>
                </div>

                <div className='container4'>
                    <div className="text-container4">
                        <h2>Nos Masterclass</h2>
                        <h3>Découvrez le plus grand catalogue de masterclasses de musique classique</h3>
                    </div>
                    <div className="content-container4">
                        <AvantageCard title={"Titre"} description={"nreijznvinvpr zeiprj vnpzerjv bzeprivnpezmezierzbnrezupmnvzjeiuberz"} background={Images.MasterClass1} width={'50%'}></AvantageCard>
                        <AvantageCard title={"Titre"} description={"nreijznvinvpr zeiprj vnpzerjv bzeprivnpezmezierzbnrezupmnvzjeiuberz"} background={Images.MasterClass1} width={'45%'}></AvantageCard>
                        <AvantageCard title={"Titre"} description={"nreijznvinvpr zeiprj vnpzerjv bzeprivnpezmezierzbnrezupmnvzjeiuberz"} background={Images.MasterClass1} width={'45%'}></AvantageCard>
                        <AvantageCard title={"Titre"} description={"nreijznvinvpr zeiprj vnpzerjv bzeprivnpezmezierzbnrezupmnvzjeiuberz"} background={Images.MasterClass1} width={'50%'}></AvantageCard>

                    </div>
                </div>

                <div className='container5'>
                    <div className="text-container5">
                        <h2>Nos Masterclass</h2>
                        <h3>Découvrez le plus grand catalogue de masterclasses de musique classique</h3>
                    </div>
                    <div className='content-container5'>
                        <SubscriptionCard size={"small"} title={"Version Pro"} price={"9.90€/Mois"} description={""} advantage1={"Acces ilimité à toutes nos masterclass"} advantage2={"Acces ilimité à toutes nos masterclass"} advantage3={"Acces ilimité à toutes nos masterclass"} advantage4={"Acces ilimité à toutes nos masterclass"} advantage5={"Acces ilimité à toutes nos masterclass"}></SubscriptionCard>
                        <SubscriptionCard size={"large"} title={"Version Pro"} price={"9.90€/Mois"} description={""} advantage1={"Acces ilimité à toutes nos masterclass"} advantage2={"Acces ilimité à toutes nos masterclass"} advantage3={"Acces ilimité à toutes nos masterclass"} advantage4={"Acces ilimité à toutes nos masterclass"} advantage5={"Acces ilimité à toutes nos masterclass"} advantage6={"Acces ilimité à toutes nos masterclass"}></SubscriptionCard>
                        <SubscriptionCard size={"small"} title={"Version Pro"} price={"9.90€/Mois"} description={""} advantage1={"Acces ilimité à toutes nos masterclass"} advantage2={"Acces ilimité à toutes nos masterclass"} advantage3={"Acces ilimité à toutes nos masterclass"} advantage4={"Acces ilimité à toutes nos masterclass"} advantage5={"Acces ilimité à toutes nos masterclass"}></SubscriptionCard>
                    </div>
                </div>
                <div className='container6'>
                    <div className="text-container6">
                        <h2>Nos Masterclass</h2>
                        <h3>Découvrez le plus grand catalogue de masterclasses de musique classique</h3>
                    </div>
                    <div className='content-container6'>
                        <TextCard variant={"variante1"} title={"Vorem ipsum "} text={"Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit."}></TextCard>
                        <TextCard variant={"variante1"} title={"Vorem ipsum "} text={"Vorem ipsum dolor sit amet, consectetur adipiscing elit."}></TextCard>
                        <TextCard variant={"variante1"} title={"Vorem ipsum "} text={"Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit."}></TextCard>
                        <TextCard variant={"variante2"} title={"Vorem ipsum "} text={"Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit."}></TextCard>
                        <TextCard variant={"variante2"} title={"Vorem ipsum "} text={"Vorem ipsum dolor sit amet, consectetur adipiscing elit."}></TextCard>
                        <TextCard variant={"variante2"} title={"Vorem ipsum "} text={"Vorem ipsum dolor sit amet, consectetur adipiscing elit.Vorem ipsum dolor sit amet, consectetur adipiscing elit."}></TextCard>
                        <TextCard variant={"variante1"} title={"Vorem ipsum "} text={"Vorem ipsum dolor sit amet, consectetur adipiscing elit."}></TextCard>
                        <TextCard variant={"variante1"} title={"Vorem ipsum "} text={"Vorem ipsum dolor sit amet, consectetur adipiscing elit."}></TextCard>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Discoverpage;