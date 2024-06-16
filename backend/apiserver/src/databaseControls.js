import { MongoClient, ServerApiVersion } from "mongodb";
import {logToFile} from "./logger.js";

const uri = "mongodb://127.0.0.1:27017";
const dbName = "local";
const client = createClient(uri);

function createClient(uri){
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  return client;
}


export async function connectDB(){
  try{
    logToFile("connecting to DB using " + uri);
    await client.connect();
    logToFile("success\n\npinging to DB");
    await client.db("admin").command({ ping: 1 });
    logToFile("success");

  }catch(error){
    logToFile(error);
  }
}


export async function getDBList(){
  try{
    logToFile("getting db list");
    let databasesList = await client.db().admin().listDatabases();
    logToFile("Databases:");
    databasesList.databases.forEach(db => logToFile(` - ${db.name}`));
    logToFile("checking if TradeGlobaX exists");
    let exists = false;
    for(const db of databasesList.databases) {
      if (db.name === dbName){
        logToFile('tradeGlobaX found');
        exists = true;
      }
    }
    if (!exists){throw new Error("tradeGlobaX not found");}
  }catch(error){
    logToFile(error);
  }
}


export async function query(collection, query, projection){
  try{
    await connectDB(client, uri);
    await getDBList(client, dbName);

    const db = await client.db(dbName);
    const coins = await db.collection(collection);
    let result = await coins.find(query).project(projection);
    result = await result.toArray()
    return result;
  }catch (error){
    console.log(error);
  }
}

export async function writeDB(data){
  try{
    await connectDB();
    await getDBList();
    
    const db = await client.db(dbName);
    const coins = await db.collection("coins");

    logToFile("create index (will not recreate if already exists)")
    const indexes = await coins.indexes();
    logToFile(indexes);
    await coins.createIndex( { timestamp: 1, name: 1, symbol: 1 }, {unique:true} )
    logToFile("success");
    
    logToFile("inserting documents")
    await coins.insertMany(data);
    logToFile("success");
  }catch(error){
    logToFile(error);
  }finally{
    await client.close()
  }
}


