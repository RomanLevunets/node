const fs = require('fs');

fs.readFile('./files/text.txt', 'utf8', function (error, data) {
    console.log(data)
});

const message = 'Test test version 2';
fs.writeFile('./files/new-file.txt', message, function () {});
