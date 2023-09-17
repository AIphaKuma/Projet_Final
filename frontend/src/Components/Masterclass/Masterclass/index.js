import React, {useState,} from 'react';
import Image from '../../../assets/image/index'
import './style.scss'
import TabsCard from "../../Tabs";
import MasterclassInfo from "./InfoCard";

function MasterclassCard({description, title, subtitle,partition}) {


    const [activeTab, setActiveTab] = useState(0);
    const [masterclassInfo, setMasterclassesInfo] = useState([]); // Initialisé en tant qu'array vide


    const renderTab = () => {
        let element;
        if (activeTab === 0) {
            element = (
                <div className="masterclass-tab">
                        <div className="masterclass-tab-title">
                            <p className="subtitle">
                                A propos de cette Masterclass
                            </p>
                            <p>{description}</p>
                        </div>

                </div>
            )
        } else if (activeTab === 1) {
            element = (
                <>
                    <embed src={partition} width="800" height="600" />
                </>
            )
        }
        return element;
    }

    const renderMasterclassesInfo = () => {
        // Vérification de l'existence de masterclass avant le mappage
        if (!masterclassInfo) {
            return null;
        }
        return masterclassInfo.map(n => <MasterclassInfo masterclassInfo={n} key={n.id} title={n.name}  image={n.image} description={n.description} />);
    };

    return (
        <div className="masterclass-cours">
            <div>
                <p className="title">Partita No. 2 </p>
                <p> Johann Sebastian Bach Jacques Rouvier's masterclass</p>
            </div>
            <div className="masterclass-body-container">
                <div className="video">

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
    );
}

export default MasterclassCard;