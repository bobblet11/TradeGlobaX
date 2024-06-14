import express from 'express';
import * as DB from "./databaseControls.js"

const uri = "mongodb://127.0.0.1:27017";
const dbName = "local";
const client = DB.createClient(uri);


export const router = express.Router();

router.get('/', async function(req, res){
    try{
        console.log("GET request at /coins/");
        res.set('Content-Type', 'application/json');
        await DB.connectDB(client, uri);
        await DB.getDBList(client, dbName);
        //fix this request params thing, i think this is broken
        const coinToSearch = req.query.coinSymbol;
        console.log(typeof(coinToSearch));
        const startStamp = req.query.startStamp;
        const stopStamp = req.query.stopStamp;

        const query = {symbol: coinToSearch};

        const projection = {timestamp:1, name:1, symbol:1, price:1};

        let result = await DB.query(client, dbName, "coins", query, {});
        console.log(result);
        res.end(result);
        //res.send(result);
    
    }
    catch (error){
        console.log(error);
    }
    finally{
        res.end();
        await client.close();
    }
 });

