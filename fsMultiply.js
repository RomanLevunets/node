const fs = require('fs');

const streamRead = fs.createReadStream('./files/article.txt', 'utf8');
const streamWrite = fs.createWriteStream('./files/t.txt');

streamRead.on('data', function (chunk) {
    streamWrite.write(chunk);
});

module.exports = {
    streamRead: streamRead
}