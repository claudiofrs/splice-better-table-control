import PropTypes from 'prop-types';

const SidebarMenuItem = ({ href, label, state }) => {
    // Define default, active and hover styles
    const baseStyle = "px-3 py-2 rounded hover:bg-[#1b3351] hover:text-white text-sm";
    const defaultStyle = "text-[#c8d0d8]"; // Default text color
    const activeStyle = "text-white bg-[#1b3351] font-semibold"; // Active text color

    // Combine styles based on the state prop
    const textStyle = state === "active" ? activeStyle : defaultStyle;

    return (
        <a
            href={href}
            className={`${baseStyle} ${textStyle} active:text-white`}
        >
            {label}
        </a>
    );
};

SidebarMenuItem.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
};

export default SidebarMenuItem;
