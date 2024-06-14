import { MongoClient, ServerApiVersion } from "mongodb";

export function createClient(uri){
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  return client;
}


export async function connectDB(client, uri){
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


export async function getDBList(client, dbName){
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


export async function query(client, dbName, collection, query, projection){
  try{
    const db = await client.db(dbName);
    const coins = await db.collection(collection);
    let result = await coins.find(query, projection);
    result = await result.toArray()
    console.log(result);
    return result;
  }catch (error){
    console.log(error);
  }
}

export async function writeDB(client, dbName, data){
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


