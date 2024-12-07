import Sidebar from "../../components/Sidebar/Sidebar"
import Topbar from "../../components/Topbar/Topbar";
import "../../index.css";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar></Sidebar>

      {/* Content Area */}
      <main className="flex-1 bg-white">
        <Topbar />
        <div className="p-4">
          <h1 className="text-2xl font-semibold mb-2">
            Welcome to the Dashboard
          </h1>
          <p>Select a menu item on the sidebar to view content.</p>
          <button className="btn btn-active btn-primary">Primary</button>
        </div>
      </main>
    </div>
  );
}

export default App;
