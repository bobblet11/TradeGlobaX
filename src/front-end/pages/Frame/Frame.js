import "../../../App.css";
import Header from "../../components/Header/Header";
import MainPage from "../../components/MainPage/MainPage";
import CryptoNewsFooter from "../../components/CryptoNewsFooter/CryptoNewsFooter";
import Footer from "../../components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

export default function Home(){
    return (
            <div className="background-app">
            <div className="foreground-app">
            <Header />
            <div className="separator-section"></div>
            <Routes>
                <Route path="Home" element={<MainPage />} />
            </Routes>
            <CryptoNewsFooter title={"Title"} />
            <CryptoNewsFooter title={"Title2"} />
            <div className="separator-section"></div>
            <Footer />
            <hr />
            </div>
            </div> 
        );
}