const fs = require('fs');

fs.unlink('./files/custom.txt', function (error, data) {
    console.log('file deleted success');
});

// fs.mkdir('folder');
// fs.rmdirSync('folder');