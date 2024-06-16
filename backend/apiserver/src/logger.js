import * as fs from 'fs';

export function logToFile(message) {
    console.log(message);
    let logStream = fs.createWriteStream('logs.txt',{flags: 'a'})
    .on('error', function(err){
        console.log(err.stack);
     });

    logStream.write(`${message}\n`);
    logStream.end();
}
  