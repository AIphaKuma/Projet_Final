import React from 'react';
import {Tab, Tabs} from "@mui/material";

const TabsCard = ({tabs, renderTab, setActiveTab, activeTab}) => {
    function handleChange(event, newValue) {
        setActiveTab(newValue);
    }

    function handleTabs() {
        return (
            <Tabs
                value={activeTab}
                onChange={handleChange}>
                { tabs.map(tab => <Tab label={tab} className="tab" key={tab} />) }
            </Tabs>
        )
    }

    return (
        <div className="encompasses-container">
            <div className="content-containers">
                <div className="tabs">
                    {handleTabs()}
                </div>
                <div className="content">
                    {renderTab()}
                </div>
            </div>
        </div>
    );
};

export default TabsCard;
