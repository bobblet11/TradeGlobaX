import express from 'express';
export const router = express.Router();

router.get('/', function(req, res){
    console.log("GET request at /accounts/")
    //DB search
    //read the HTTP express section of ndoe booke ghere
    //get params, which should be the coin, and range
    //do DB search
    //set headers
    //send the reply in form of JSON
 });
