const fs = require('fs');
const readLine = require('readline');

const readStream = fs.createReadStream('./access.log', 'utf-8')

const firstWriteStream = fs.createWriteStream('./89.123.1.41_requests.log');
const secondWriteStream = fs.createWriteStream('./34.48.240.111_requests.log');

const rl = readLine.createInterface({
    input: readStream,
    terminal: true,
});

rl.on('line', (line)=>{
    if (line.includes('89.123.1.41')) {
        firstWriteStream.write(line + '\n');
    }
    if (line.includes('34.48.240.111')) {
        secondWriteStream.write(line + '\n');
    }

})



