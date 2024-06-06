//make this an express app? then instead of fetching from API, fetch from this.
//this will always run in background in render.io

let data = null;
let key = "717d6948-4684-488c-b7a1-2cca131df220"

function fetchCrypto(key) {
    console.log("fetching");
    fetch(
      "https://cors-anywhere-pnd9.onrender.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        method: "GET",
        headers: {
          "X-CMC_PRO_API_KEY": key,
        },
      }
    )
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson["data"]);
        return data;
    })
    .catch((error) => {
        console.error(error);
        return null;
    });
    }

function cleanData(data) {
    if (data===null) {
        console.log("null data");
        return;
    }
    console.log("mapping data");
    for (i=0; i<length(data); i++){
        let coin = data[i];
        data[i] = {
            "timestamp" : coin["datetime"],
            "name" : coin["name"],
            "symbol" : coin["symbol"],
            "price" : coin["quote"]["USD"]["price"],
        };
    }
    return;
}

function writeDB(data){
    //the issue here is that I dont have any DB storage. where am i going to store this
    //I run a script on one of my laptops connected to home wifi
    //express server.
    //then there is no need to host this script, just keep it running.
    //build a express HTTP server
}

if (Date.UTC["minutes"] === 0){
    //wait 1 minute here
    data = fetchCrypto(key);
    cleanData(data); //data is a array, so its pass by reference
    writeDB(data); 

    //weak entity set, timestamp is discriminator
    //coin is strong entity set
    //[(symbol, timestamp), name, price]
}





//laptop SERVER + DB
//will stay at home
//every hour, will fetch from api, and write to its DB in it's entirety.
//when receiving requests, read needed data from DB, and format it, then sending it back to react client.


//react clients
//will fetch from the laptop server instead of API
//figure out a way to use previous values when undefined. place holder until new data is loaded in.
//do a time check, if data is available, and it isn't a new minute, then dont bother with a API request
//otherwise, if no data is avilable (ie undefined is shown everywhere), then call api
//OR if a new minute happened, then call API to update.


