import express from 'express';
import {router as coins} from './coins.js';
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>api server</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <h1>A JavaScript project</h1>
  <p>This server is used to <p>
  <ol>
    <li>get all neccessary data from external apis for our cryptocurrency react website TradeGlobaX</li>
    <li>serve all neccessary data required by TradeGlobaX to save on API credits</li>
    <li>act as the access point for any DB requests for TradeGlobaX's backend</li>
  </ol>
</body>
</html>`;

export const app = express();

app.get('/', (req, res) => {
  console.log("GET request at /")
  res.set('Content-Type', 'text/html');
  res.status(200).send(html);
});


app.use('/coins', coins);


