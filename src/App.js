import logo from "./logo.svg";
import "./App.css";
import Header from "./front-end/components/Header/Header";
import MainPage from "./front-end/components/MainPage/MainPage";
import CryptoNewsFooter from "./front-end/components/CryptoNewsFooter/CryptoNewsFooter";
import Footer from "./front-end/components/Footer/Footer";

function App() {
  return (
    <div className="background-app">
      <div className="foreground-app">
        <Header />
        <div className="separator-section"></div>
        <MainPage />
        <CryptoNewsFooter title={"Title"} />
        <CryptoNewsFooter title={"Title2"} />
        <div className="separator-section"></div>
        <Footer />
        <hr />
      </div>
    </div>
  );
}

export default App;
