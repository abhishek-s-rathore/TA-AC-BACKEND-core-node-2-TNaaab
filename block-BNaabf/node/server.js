const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const path = require('path');

// Path
// 1
console.log(`../client/index.js`);
// 2
// console.log( path.join(__dirname));

// Server

let server = http.createServer(handleRequest);

function handleRequest(req, res) {}

server.listen(1212, 'localhost', () => {
  console.log('Server listning to port 1212!');
});
