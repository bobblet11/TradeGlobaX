import "./App.css";
import Frame from "./pages/Frame/Frame";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Frame />} />
    </Routes>
  );
}

export default App;
