const url = require('url');
// const events = require('./events');
// const utils = require('./utils');
const fs = require('fs');
const fsDelete = require('./fsDelete');
const fsMultiply = require('./fsMultiply');
const streamPipe = require('./pipe');
const text = require('./fsMultiply');


module.exports = {
    handlerFunction: function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        const streamRead = fs.createReadStream(__dirname + '/index.html', 'utf8');
        streamRead.pipe(res)
    }
};