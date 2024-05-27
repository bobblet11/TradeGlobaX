import "./Header.css";
import CryptoNewsDiv from "./CryptoNewsDiv";
import React, { useEffect, useState } from "react";

export default function CryptoNewsBar() {

  function getCrypto(){
    fetch('https://cors-anywhere-pnd9.onrender.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=5',{
        method:'GET',
        headers: {
            'X-CMC_PRO_API_KEY': '717d6948-4684-488c-b7a1-2cca131df220',
        }
    }
    )
    .then((response) => response.json())
    .then((responseJson) => {
      setAPIlist(responseJson['data']);
    })
    .catch((error)=> {
        console.error(error);
    });
  }

  const [APIlist, setAPIlist] = useState(new Array(5).fill(""));
  useEffect(() => {
    
    getCrypto()
    const interval=setInterval(()=>{
      getCrypto()
      },60000)

    return()=>clearInterval(interval);
  }, []);




  return (
    <div className="left-bar crypto-news-bar">
        <CryptoNewsDiv value={0} data={APIlist}/>
        <CryptoNewsDiv value={1} data={APIlist}/>
        <CryptoNewsDiv value={2} data={APIlist}/>
        <CryptoNewsDiv value={3} data={APIlist}/>
        <CryptoNewsDiv value={4} data={APIlist}/>
    </div>
  );
}
