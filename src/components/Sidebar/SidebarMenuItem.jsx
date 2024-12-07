const SidebarMenuItem = ({ href, text, state }) => {
    // Define default, active and hover styles
    const baseStyle = "px-3 py-2 rounded hover:bg-[#1b3351] hover:text-white";
    const defaultStyle = "text-[#c8d0d8]"; // Default text color
    const activeStyle = "text-white bg-[#1b3351] font-semibold"; // Active text color

    // Combine styles based on the state prop
    const textStyle = state === "active" ? activeStyle : defaultStyle;

    return (
        <a
            href={href}
            className={`${baseStyle} ${textStyle} active:text-white`}
        >
            {text}
        </a>
    );
};

export default SidebarMenuItem;
