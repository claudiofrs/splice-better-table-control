import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ConfigProvider } from "antd"; // Import ConfigProvider
import enUS from "antd/locale/en_US"; // English locale for Ant Design
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./pages/app/App";
import Home from "./pages/home/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider locale={enUS}> {/* Wrap the app in ConfigProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </ConfigProvider>
  </StrictMode>
);
