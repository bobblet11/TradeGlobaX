import * as DB from "./databaseControls.js"

const uri = "mongodb://127.0.0.1:27017";
const dbName = "local"
const key = "717d6948-4684-488c-b7a1-2cca131df220"


const client = DB.createClient(uri);


async function fetchData(){
  try{
    let currentDate= new Date();
    console.log("fetching at " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());
    const data = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=1000",
    { 
      method: "GET",
      headers: {"X-CMC_PRO_API_KEY": key,},
    })
    let dataJson = await data.json();
    return dataJson["data"];

  }catch(error){
    console.log(error);

  }
}


async function formatData(dataJson){
  console.log("formatting JSON data");
  const newData = await dataJson.map((coin)=>{
    return {
    timestamp:          new Date(coin.last_updated),
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
  console.log("success");
  return newData;
}


async function fetchWriteCrypto(){ 
    try{
      let data = await fetchData();
      await DB.connectDB(client, uri);
      await DB.getDBList(client, dbName);
      data = await formatData(data);
      await DB.writeDB(client, dbName, data);
      
    }catch(error){
      console.log(error);
    }finally{
      await client.close();
    }
}


async function startAPIFetcher(){
    console.log("checking for start of hour.\nwaiting for");
    //waitStartOfHour();
    console.log("at start of hour");
    await fetchWriteCrypto();
    //updates every half hour
    const interval = setInterval(() => {
      fetchWriteCrypto();
      }, (60 * 1000* 30));
}


function waitStartOfHour(){
    let lastSeconds;
    let lastMinute;
    while (true){
        let currentDate = new Date();
        let currentMinute = currentDate.getMinutes();
        let currentSeconds = currentDate.getSeconds();
        if (currentSeconds <=10 && currentSeconds >=5 && currentMinute <=10 && currentMinute>=5){
            console.log("READY at " + currentMinute+" : "+currentSeconds);
            //start api loop
            break;
        }else{
            //wait till seconds <=10, 

            if (currentMinute != lastMinute){
              lastMinute=currentMinute;
            }
            if (currentSeconds != lastSeconds){
                lastSeconds=currentSeconds;
                process.stdout.write("\r"+(60-lastMinute)+" : "+(60-currentSeconds));
            }
            continue;
        }
    }
    console.log("ready to start api fetcher");
    return;
}

startAPIFetcher();
