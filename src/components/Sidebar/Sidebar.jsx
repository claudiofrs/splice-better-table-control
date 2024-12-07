//import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";

function Sidebar() {
  return (
    <aside className="w-[280px] bg-[#0a2240] text-white p-2 py-0 flex flex-col justify-between">
      <div className="flex flex-col space-y-1">
        <div className="flex justify-left p-4 py-5 border-b border-solid" style={{ borderColor: '#3a4d66' }}>
          <img
            src="https://summitglobal.com/hs-fs/hubfs/summit-logo.png?width=264&height=45&name=summit-logo.png"
            alt="Summit Logo"
            className="h-6 w-auto"
          />
        </div>
        <SidebarMenuItem href="#home" label="Home" state="default" />
        <SidebarMenuItem href="#transactions" label="Transactions" state="active" />
        <SidebarMenuItem href="#reports" label="Reports" state="default" />
        <SidebarMenuItem href="#invoices" label="Invoices" state="default" />
        <SidebarMenuItem href="#approval" label="Approval Policies" state="default" />
      </div>
      <div className="flex flex-col space-y-2 py-2">
        <SidebarMenuItem href="#companySettings" label="Company Settings" state="default" />
        <SidebarMenuItem href="#Log out" label="Log out" state="default" />
      </div>
    </aside>
  );
}

export default Sidebar;
