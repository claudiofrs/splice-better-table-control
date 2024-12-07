import React, { useState } from "react";
import Tab from "./Tab"; // Assuming Tab is in a separate file

// HorizontalTab Component
const HorizontalTab = ({ tabData }) => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState(0); // Default active tab is the first one

    // Handle tab click to set active tab
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div role="tablist" className="tabs h-auto flex tabs-md border-b border-[#eaeaea] ">
            {tabData.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label}
                    isActive={index === activeTab}
                    onClick={() => handleTabClick(index)}
                />
            ))}
        </div>
    );
};

export default HorizontalTab;
