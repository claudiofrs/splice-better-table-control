import "../../index.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import Topbar from "../../components/Topbar/Topbar";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar></Sidebar>

      {/* Content Area */}
      <main className="flex-1 bg-white">
        <Topbar />
        <div className="p-4 py-4">
          <h1 className="text-2xl font-semibold mb-2">
            Transactions
          </h1>

        </div>
      </main>
    </div>
  );
}

export default App;
