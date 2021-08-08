const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

// Create And Capture

let server1 = http.createServer(handleRequest1);

function handleRequest1(req, res) {
  let path = url.parse(req.url);
  pathname = path.pathname;
  let datatype = req.headers['contenyt-type'];
  let store = ``;
  if (req.method === 'POST' && pathname === `/`) {
    req.on(`data`, (chunk) => {
      store += chunk;
    });
    req.on('end', () => {
      if (datatype === `application/json`) {
        res.end(store);
      }
    });
  }
}

server1.listen(1111, 'localhost', () => {
  console.loh('Server listning to port 1111!');
});
