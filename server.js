const http = require('http');
const app = require('./app');

http.createServer(app.handlerFunction).listen(8080);
// Start the server on port 3000
console.log('Node server running on port 8080');
