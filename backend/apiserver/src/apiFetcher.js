import * as DB from "./databaseControls.js"
import {logToFile} from "./logger.js";

const key = "717d6948-4684-488c-b7a1-2cca131df220"

async function fetchData(){
  try{
    let currentTime = new Date().getTime();
    logToFile("------------------------------------------")
    logToFile("fetching at " + new Date(currentTime).toUTCString());
    const data = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=1000",
    { 
      method: "GET",
      headers: {"X-CMC_PRO_API_KEY": key,},
    })
    let dataJson = await data.json();
    currentTime += (30 * 60000);
    logToFile("next fetch at " + new Date(currentTime).toUTCString())
    logToFile("------------------------------------------")
    return dataJson["data"];

  }catch(error){
    logToFile(error);
  }
}


async function formatData(dataJson){
  logToFile("formatting JSON data");
  const newData = await dataJson.map((coin)=>{
    return {
    timestamp:          coin.last_updated,
    id:                 coin.id,
    name:               coin.name,
    symbol:             coin.symbol,
    num_market_pairs:   coin.num_market_pairs,
    max_supply:         coin.max_supply,
    circulating_supply: coin.circulating_supply,
    total_supply:       coin.total_supply,
    volume_24h:         coin.quote.USD.price,
    market_cap:         coin.quote.USD.market_cap,
    fully_diluted_market_cap:coin.quote.USD.fully_diluted_market_cap,
    price:              coin.quote.USD.price,
    volume_change_24h:  coin.quote.USD.volume_change_24h,
    percent_change_1h:  coin.quote.USD.percent_change_1h,
    percent_change_24h: coin.quote.USD.percent_change_24h,
    percent_change_7d:  coin.quote.USD.percent_change_7d,
    percent_change_30d: coin.quote.USD.percent_change_30d,
    percent_change_60d: coin.quote.USD.percent_change_60d,
    percent_change_90d: coin.quote.USD.percent_change_90d,
    }
  });
  logToFile("success");
  return newData;
}


async function fetchWriteCrypto(){ 
    try{
      let data = await fetchData();
      data = await formatData(data);
      await DB.writeDB(data);
    }catch(error){
      console.log(error);
    }
}


export async function startAPIFetcher(){
    logToFile("checking for start of hour.");
    var waitToStart = await setInterval(()=>{
      let currentDateUTC = new Date(new Date().toUTCString());
      let currentMinuteUTC = currentDateUTC.getMinutes();
      let currentSecondsUTC = currentDateUTC.getSeconds();
      if ((currentSecondsUTC >= 10 && currentSecondsUTC <=50) && (currentMinuteUTC ===30 || currentMinuteUTC===0)){
        logToFile("READY at " + currentDateUTC.toUTCString());
        fetchWriteCrypto();
        //updates every half hour
        const interval = setInterval(() => {
          fetchWriteCrypto();
        }, (60 * 1000* 30));
        clearInterval(waitToStart);

      }else{
        logToFile("wait for " + ((currentMinuteUTC>30 ? 60-currentMinuteUTC : 30-currentMinuteUTC))+" : "+(60-currentSecondsUTC));
      }
    }, 1000);
}

