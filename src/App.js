import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <div className="background-app">
      <div className="foreground-app">
        <Header />
        <div className="separator-section"></div>
        <MainPage />
      </div>
    </div>
  );
}

export default App;
