//import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";

function Sidebar() {
  return (
    <aside className="w-[240px] bg-[#0a2240] text-white p-2 py-0 flex flex-col justify-between">
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
        <SidebarMenuItem href="#approval" label="Approvals" state="default" />
        <SidebarMenuItem href="#reports" label="Reports" state="default" />
        <hr className="opacity-10" />
        <SidebarMenuItem href="#invoices" label="Invoices" state="default" />
        <SidebarMenuItem href="#reimbursements" label="Reimbursements" state="default" />
        <hr className="opacity-10" />
        <SidebarMenuItem href="#budgets" label="Budgets" state="default" />
        <SidebarMenuItem href="#companySettings" label="Users" state="default" />
        <SidebarMenuItem href="#approvalPolicies" label="Approval Policies" state="default" />
      </div>
      <div className="flex flex-col space-y-2 py-2">
        <SidebarMenuItem href="#companySettings" label="Company Settings" state="default" />
      </div>
    </aside>
  );
}

export default Sidebar;
