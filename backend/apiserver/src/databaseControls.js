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
    logToFile("CONNECT TO DB " + uri);
    await client.connect();
    logToFile("PINGING DB");
    await client.db("admin").command({ ping: 1 });
  }finally{
    logToFile("CONNECTED TO DB")
  }
}


export async function getDBList(){
  try{
    logToFile("GETTING DB LIST");
    let databasesList = await client.db().admin().listDatabases();
    logToFile("DATABASES:");
    databasesList.databases.forEach(db => logToFile(` - ${db.name}`));
    logToFile("CHECKING IF TradeGlobaX EXISTS");
    let exists = false;

    for(const db of databasesList.databases) {
      if (db.name === dbName){
        logToFile('TradeGlobaX FOUND');
        exists = true;
      }
    }

    if (!exists){throw new Error("TradeGlobaX NOT FOUND");}
  }finally{
    logToFile("GOT DB LIST")
  }
}


export async function query(collection, query, projection){
  try{
    logToFile("READING DB")
    await connectDB();
    await getDBList();

    const db = await client.db(dbName);
    const coins = await db.collection(collection);
    let result = await coins.find(query).project(projection);
    result = await result.toArray()
  
    return result;
  }finally{
    logToFile("QUERY FINISHED")
    logToFile("CLOSING CONNECTION")
    await client.close();
  }
}

export async function writeDB(data){
  try{
    logToFile("WRITING TO DB")
    await connectDB();
    await getDBList();
    
    const db = await client.db(dbName);
    const coins = await db.collection("coins");
    
    logToFile("WRITING")
    await coins.insertMany(data);
  }finally{
    logToFile("WRITING FINISHED")
    logToFile("CLOSING CONNECTION")
    await client.close()
  }
}

