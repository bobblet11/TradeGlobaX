import "./App.css";
import Frame from "./pages/Frame/Frame";
import { Route, Routes } from "react-router-dom";
import React from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import SettingPage from "./pages/SettingPage/SettingPage";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Frame />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/setting" element={<SettingPage />} />
    </Routes>
  );
}

export default App;
