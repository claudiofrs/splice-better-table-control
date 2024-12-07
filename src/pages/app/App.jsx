import "../../index.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import Topbar from "../../components/Topbar/Topbar";
// import DataTable from "../../components/DataTable/DataTable";
import HorizontalTab from "../../components/Tabs/HorizontalTab";
import "./App.css";

function App() {
  const tabData = [
    { label: "Invoices" },
    { label: "Reimbursements" },
    { label: "Cards" },
    // You can add more tabs here
  ];
  return (
    <div className="flex h-screen">
      <Sidebar></Sidebar>

      {/* Content Area */}
      <main className="flex-1 bg-white">
        <Topbar />
        <div className="p-4 py-4">
          <h1 className="text-2xl font-semibold mb-4">
            Transactions
          </h1>
          <HorizontalTab tabData={tabData} />
        </div>
      </main>
    </div>
  );
}

export default App;
