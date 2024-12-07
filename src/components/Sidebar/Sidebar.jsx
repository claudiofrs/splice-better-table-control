//import React from "react";

function Sidebar() {
  return (
    <aside className="w-[220px] bg-[#0a2240] text-white p-2 flex flex-col">
      <div className="flex justify-start p-4">
        <img
          src="https://summitglobal.com/hs-fs/hubfs/summit-logo.png?width=264&height=45&name=summit-logo.png"
          alt="Summit Logo"
          className="h-[20px] w-auto"
        />
      </div>
      <nav className="flex flex-col space-y-2">
        <a href="#home" className="px-2 py-2 hover:bg-[#123456] rounded">
          Home
        </a>
        <a href="#analytics" className="px-2 py-2 hover:bg-[#123456] rounded">
          Analytics
        </a>
        <a href="#settings" className="px-2 py-2 hover:bg-[#123456] rounded">
          Settings
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
