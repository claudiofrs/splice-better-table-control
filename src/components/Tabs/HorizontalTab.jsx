import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
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
        <div role="tablist" className="tabs h-auto flex tabs-md border-b border-[#eaeaea]">
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

// PropTypes validation
HorizontalTab.propTypes = {
    tabData: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired, // Each tab should have a label
        })
    ).isRequired, // The tabData prop must be an array of objects, each with a label
};

export default HorizontalTab;
