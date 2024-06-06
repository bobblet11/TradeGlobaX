import axios from "axios";

let data = null;
let key = "717d6948-4684-488c-b7a1-2cca131df220"

function fetchCrypto(){
    let currentDate= new Date();
    console.log("fetching at " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());
    
    fetch(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        {
          method: "GET",
          headers: {
            "X-CMC_PRO_API_KEY": "717d6948-4684-488c-b7a1-2cca131df220",
          },
        }
      )
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((responseJson) => {
        console.log(responseJson["data"]);
        return responseJson["data"];
    })
    .catch((error) => {
        console.error(error);
    });
}

function startAPIFetcher(){
    console.log("checking for start of minute");
    waitForStartOfMinute();
    console.log("at start of minute");
    fetchCrypto(key);
    const interval = setInterval(() => {
        fetchCrypto(key);
      }, (60 * 1000));
}


function waitForStartOfMinute(){
    let lastSeconds;
    while (true){
        let currentDate = new Date();
        let currentSeconds = currentDate.getSeconds();
        if (currentSeconds <=10){
            console.log("READY at " + currentSeconds);
            //start api loop
            break;
        }else{
            //wait till seconds <=10, 
            if (currentSeconds != lastSeconds){
                lastSeconds=currentSeconds;
                console.log(currentSeconds);
            }
            continue;
        }
    }
    console.log("ready to start api fetcher");
    return;
}


startAPIFetcher();