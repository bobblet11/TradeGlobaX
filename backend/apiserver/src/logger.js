import * as fs from 'fs';

export function logToFile(message) {
    console.log(message);
    const logStream = fs.createWriteStream("backend/apiserver/src/logs.txt",{flags: 'a'})
    logStream.write(`${message}\n`);
    logStream.end();
}
  