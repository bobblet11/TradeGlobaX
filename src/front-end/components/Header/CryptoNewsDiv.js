import React, { useEffect, useState } from "react";

export default function CryptoNewsDiv({data, value}) {
    var out = "";
    if (data[value] === '' || data === undefined){
        console.log('nothing to update')
    }else{
        var symbol = data[value]['symbol'];
        var price = data[value]['quote']['USD']['price'];
        out = symbol + ": $" + Math.round(+price, 2) + " USD";
    }

    return (<div className='crypto-news-component'>
        {out}
    </div>);

}