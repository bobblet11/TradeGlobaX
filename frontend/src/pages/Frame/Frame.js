import "../../App.css";
import Header from "../../components/Header/Header";
import MainPage from "../../components/MainPage/MainPage";
import CryptoNewsFooter from "../../components/CryptoNewsFooter/CryptoNewsFooter";
import Footer from "../../components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import CoinPage from "../CoinPage/CoinPage";
import React, { useEffect, useState } from "react";

export default function Frame() {
  const [APIlist, setAPIlist] = useState(new Array(5).fill(""));

  function getCrypto() {
    fetch(
      "https://cors-anywhere-pnd9.onrender.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=200",
      {
        method: "GET",
        headers: {
          "X-CMC_PRO_API_KEY": "717d6948-4684-488c-b7a1-2cca131df220",
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson["data"]);
        setAPIlist(responseJson["data"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getCrypto();
    const interval = setInterval(() => {
      getCrypto();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-app">
      <div className="foreground-app">
        <Header APIdata={APIlist} />
        <div className="separator-section"></div>

        <Routes>
          <Route path="/" element={null} />
          <Route path="/home" element={<MainPage APIdata={APIlist} />} />
          <Route
            path="/home/:coinID"
            element={<CoinPage APIdata={APIlist} />}
          />
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
