const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (request, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
    data: 'Parent Children', 
  }));
});

server.listen(8000, function(){
  console.log('http://localhost:8000');
});