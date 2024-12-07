import React from "react";
import PropTypes from "prop-types";

// Tab Component
const Tab = ({ label, isActive, onClick }) => {
    return (
        <a
            href="#"
            className={`tab ${isActive ? "tab-active font-bold text-primary border-b border-primary " : ""} inline-block px-4 py-2 m-0 h-auto `}
            onClick={onClick}
        >
            {label}
        </a>
    );
};

// Prop types validation for Tab
Tab.propTypes = {
    label: PropTypes.string.isRequired, // label should be a string
    isActive: PropTypes.bool.isRequired, // isActive should be a boolean
    onClick: PropTypes.func, // onClick is optional, if passed, it should be a function
};

// Default props
Tab.defaultProps = {
    onClick: () => { }, // Default to an empty function if no onClick is provided
};

export default Tab;
