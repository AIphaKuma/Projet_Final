import React, {useState,} from 'react';
import Image from '../../../assets/image/index'
import './style.scss'

function MasterclassCard({image,title,duration, creator, description, lvl}) {


    const [activeTab, setActiveTab] = useState(0);


    const renderTab = () => {
        let element;
        if (activeTab === 0) {
            element = (
                <>

                </>
            )
        } else if (activeTab === 1) {
            element = (
                <>

                </>
            )
        } else if (activeTab === 2) {
            element = (
                <>

                </>
            )
        }
        return element;
    }

    return (
        <div className="masterclass-cours">
            <p className="title"></p>

            <div className="masterclass-body-container">
                <div className="video">

                </div>
                <div className="info">

                </div>
            </div>



        </div>
    );
}

export default MasterclassCard;