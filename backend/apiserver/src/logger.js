import * as fs from 'fs';

export function logToFile(message) {
    process.stdout.write(message + "\n");
    const logStream = fs.createWriteStream("logs.txt",{flags: 'a'})
    logStream.write(message + "\n");
    logStream.end();
}
  
