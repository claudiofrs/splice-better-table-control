//import React from "react";

function Sidebar() {
  return (
    <aside className="w-[220px] bg-[#0a2240] text-white p-2 py-0 flex flex-col gap-2">
      <div className="flex justify-left p-4 py-6 border-b border-solid" style={{ borderColor: '#3a4d66' }}>
        <img
          src="https://summitglobal.com/hs-fs/hubfs/summit-logo.png?width=264&height=45&name=summit-logo.png"
          alt="Summit Logo"
          className="h-6 w-auto"
        />
      </div>
      <nav className="flex flex-col space-y-2">
        <a
          href="#home"
          className="px-2 py-1 text-[#c8d0d8] hover:text-white active:text-white hover:bg-[#123456] rounded"
        >
          Home
        </a>
        <a href="#transactions" className="px-2 py-1 text-[#c8d0d8] hover:text-white active:text-white hover:bg-[#123456] rounded">
          Transactions
        </a>
        <a href="#approval" className="px-2 py-1 text-[#c8d0d8] hover:text-white active:text-white hover:bg-[#123456] rounded">
          Approval
        </a>
        <a href="#reports" className="px-2 py-1 text-[#c8d0d8] hover:text-white active:text-white hover:bg-[#123456] rounded">
          Reports
        </a>
        <a href="#invoices" className="px-2 py-1 text-[#c8d0d8] hover:text-white active:text-white hover:bg-[#123456] rounded">
          Invoices
        </a>
        <a href="#reimbursements" className="px-2 py-1 text-[#c8d0d8] hover:text-white active:text-white hover:bg-[#123456] rounded">
          Reimbursements
        </a>
        <a href="#budgets" className="px-2 py-1 text-[#c8d0d8] hover:text-white active:text-white hover:bg-[#123456] rounded">
          Budgets
        </a>
        <a href="#users" className="px-2 py-1 text-[#c8d0d8] hover:text-white active:text-white hover:bg-[#123456] rounded">
          Users
        </a>
        <a href="#approval" className="px-2 py-1 text-[#c8d0d8] hover:text-white active:text-white hover:bg-[#123456] rounded">
          Approval Policies
        </a>

      </nav>
    </aside>
  );
}

export default Sidebar;
