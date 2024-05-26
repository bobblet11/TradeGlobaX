import React, { useEffect, useState } from "react";

export default function CryptoNewsDiv({ value }) {
    const [info, setInfo] = useState();
    useEffect(() => {
        fetch('http://localhost:3000/users',{
            method:'GET',
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
                'Access-Control-Allow-Headers' : '*',
            }
        }
        )
        .then((res) => {
            console.log(res)
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setInfo(data);
        });
    }, []);
    return (<div className='crypto-news-component'>
        {info}
    </div>);

}