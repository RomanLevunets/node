const fs = require('fs');

const streamRead = fs.createReadStream(__dirname + '/files/article.txt', 'utf8');
const streamWrite = fs.createWriteStream(__dirname + '/files/e.txt');

streamRead.pipe(streamWrite);

module.exports = {
    streamRead: streamRead
};