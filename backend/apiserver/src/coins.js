import express from 'express';
import * as DB from "./databaseControls.js"
import url from 'url'
import {logToFile} from "./logger.js";

const failedResponseBody = 
`
<h1>
TradeGlobaX
</h1>
<div>

Error! 

</div>
`;


export const router = express.Router();

router.get('/', async function(req, res){
    try{
        logToFile("GET request at /coins/");

        let responseCode = 400;
        let responseHeader = {'Content-Type': ' text/html'};
        let responseBody = failedResponseBody;

        let queryString = url.parse(req.url, true).query;
        const coinToSearch = queryString.coinSymbol;
        const startStamp = queryString.startStamp;
        const stopStamp = queryString.stopStamp;
        
        const startStampDate = new Date(startStamp);
        const stopStampDate = new Date(stopStamp);

        if ( stopStampDate - startStampDate < 0){
            logToFile("timestamp Error");
            res.writeHead(responseCode, responseHeader);
            res.end(responseBody);
            return;
        }

        responseCode = 200;
        responseHeader = {'Content-Type': 'application/json'}
        //fix this request params thing, i think this is broken
        const query = {symbol: coinToSearch, 
                       timestamp : {$gte : startStamp, $lte : stopStamp}
        };
        const projection = {timestamp:1, name:1, symbol:1, price:1};

        responseBody = await DB.query("coins", query, projection);
        responseBody = await JSON.stringify(responseBody);

        logToFile("writing responseBody");
        res.writeHead(responseCode, responseHeader);
        res.end(responseBody);
    }
    catch (error){
        logToFile(error);
    }
    finally {
        logToFile("GET request finished")
        logToFile("------------------------------------------")
    }
 });

