import "./App.css";
import Frame from "./front-end/pages/Frame/Frame";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Frame />} />
    </Routes>
  );
}

export default App;
