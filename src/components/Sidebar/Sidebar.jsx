//import React from "react";

function Sidebar() {
  return (
    <aside className="w-[220px] bg-[#0a2240] text-white p-2 py-0 flex flex-col gap-2">
      <div className="flex justify-start p-4 border-b border-solid" style={{ borderColor: '#3a4d66' }}>
        <img
          src="https://summitglobal.com/hs-fs/hubfs/summit-logo.png?width=264&height=45&name=summit-logo.png"
          alt="Summit Logo"
          className="h-[20px] w-auto"
        />
      </div>
      <nav className="flex flex-col space-y-2">
        <a href="#home" className="px-2 py-1 hover:bg-[#123456] rounded">
          Home
        </a>
        <a href="#analytics" className="px-2 py-1 hover:bg-[#123456] rounded">
          Transactions
        </a>
        <a href="#settings" className="px-2 py-1 hover:bg-[#123456] rounded">
          Approval
        </a>
        <a href="#settings" className="px-2 py-1 hover:bg-[#123456] rounded">
          Reports
        </a>
        <a href="#settings" className="px-2 py-1 hover:bg-[#123456] rounded">
          Invoices
        </a>
        <a href="#settings" className="px-2 py-1 hover:bg-[#123456] rounded">
          Reimbursements
        </a>
        <a href="#settings" className="px-2 py-1 hover:bg-[#123456] rounded">
          Budgets
        </a>
        <a href="#settings" className="px-2 py-1 hover:bg-[#123456] rounded">
          Users
        </a>
        <a href="#settings" className="px-2 py-1 hover:bg-[#123456] rounded">
          Approval Policies
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
