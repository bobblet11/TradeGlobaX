import express, { response } from 'express';
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
\n
`;

const successfulResponse = 
`
<div>

Successful 

</div>
`;

const databaseError = 
`
<div>

Failed DB operation!

</div>
`;

const badParameters = 
`
<div>

Parameters are incorrect

</div>
`;


export const router = express.Router();

router.get('/', async function(req, res){
    logToFile("GET request at /coins/");
    let responseCode = 400;
    let responseHeader = {'Content-Type': ' text/html'};
    let responseBody;
    const queryString = await url.parse(req.url, true).query;
    const coinToSearch = queryString.coinSymbol;
    const startStamp = queryString.startStamp;
    const stopStamp = queryString.stopStamp;

    const startStampDate = new Date(startStamp);
    const stopStampDate = new Date(stopStamp);

    if ( (coinToSearch===undefined || startStamp === undefined || stopStamp === undefined) || stopStampDate - startStampDate < 0){
        logToFile("BAD PARAMETER ERROR")
        logToFile("------------------------------------------")
        responseBody = failedResponseBody + badParameters;
        res.writeHead(responseCode, responseHeader);
        res.end(responseBody);
        return;
    }

    const query = {symbol: coinToSearch, 
                   timestamp : {$gte : startStamp, $lte : stopStamp}
                  };

    const projection = {timestamp:1, name:1, symbol:1, price:1};
    try{
        responseBody = await DB.query("coins", query, projection);
        responseBody = await JSON.stringify(responseBody);
    }catch (error){
        logToFile("DB ERROR")
        logToFile(error);
        logToFile("------------------------------------------")
        responseBody = failedResponseBody + databaseError;
        res.writeHead(responseCode, responseHeader);
        res.end(responseBody);
        return;
    }

    
    responseCode = 200;
    responseHeader = {'Content-Type': 'application/json'}

    res.writeHead(responseCode, responseHeader);
    res.end(responseBody);

    logToFile("SUCCESSFUL REQUEST");
    logToFile("REQUEST DONE");
    logToFile("------------------------------------------");
    }
);

 
router.post('/', async function(req, res){
    logToFile("POST request at /coins/");
    let responseCode = 400;
    let responseHeader = {'Content-Type': ' text/html'};
    let responseBody;
    let data;
    const queryString = await url.parse(req.url, true).query;

    try{
        data = await formatData(queryString);
    }catch (error){
        logToFile("BAD PARAMETER ERROR")
        logToFile(error);
        logToFile("------------------------------------------")
        responseBody = failedResponseBody + badParameters;
        res.writeHead(responseCode, responseHeader);
        res.end(responseBody);
        return;
    }

    try{
        await DB.writeDB(data);
    }catch (error){
        logToFile("DB ERROR")
        logToFile(error);
        logToFile("------------------------------------------")
        responseBody = failedResponseBody + databaseError;
        res.writeHead(responseCode, responseHeader);
        res.end(responseBody);
        return;
    }

    responseCode = 200;
    responseHeader = {'Content-Type': 'application/json'}
    responseBody = successfulResponse;
    res.writeHead(responseCode, responseHeader);
    res.end(responseBody);

    logToFile("SUCCESSFUL REQUEST");
    logToFile("REQUEST DONE");
    logToFile("------------------------------------------");
 });


