import axios from "axios";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb://127.0.0.1:27017";
const dbName = "local"
const collectionName = "coins"
const key = "717d6948-4684-488c-b7a1-2cca131df220"

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


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


async function connectDB(){
  try{
    console.log("connecting to DB using " + uri);
    await client.connect();
    console.log("success\n\npinging to DB");
    await client.db("admin").command({ ping: 1 });
    console.log("success");

  }catch(error){
    console.log(error);

  }
}


async function getDBList(){
  try{
    console.log("getting db list");
    let databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    console.log("checking if TradeGlobaX exists");
    let exists = false;
    for(const db of databasesList.databases) {
      if (db.name === dbName){
        console.log('tradeGlobaX found');
        exists = true;
      }
    }
    if (!exists){throw new Error("tradeGlobaX not found");}
  }catch(error){
    console.log(error);
  }
}


async function formatData(dataJson){
  console.log("formatting JSON data");
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
  console.log("success");
  return newData;
}


async function writeDB(data){
  try{
    const db = await client.db(dbName);
    const coins = await db.collection("coins");

    console.log("create index (will not recreate if already exists)")
    const indexes = await coins.indexes();
    console.log(indexes);
    await coins.createIndex( { timestamp: 1, name: 1, symbol: 1 }, {unique:true} )
    console.log("success");
    
    console.log("inserting documents")
    await coins.insertMany(data);
    console.log("success");
  }catch(error){
    console.log(error);
  }
}


async function fetchWriteCrypto(){ 
    try{
      let data = await fetchData();
      await connectDB();
      await getDBList();
      data = await formatData(data);
      await writeDB(data);
      
    }catch(error){
      console.log(error);
    }finally{
      await client.close();
    }
}


async function startAPIFetcher(){
    console.log("checking for start of hour.\nwaiting for");
    waitStartOfHour();
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
