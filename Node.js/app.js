const http = require('node:http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': "text/html" });
  res.end(`
  <html>
    <body>
      <h1>hello</h1>
    </body>
  </html>`
  );
});

server.listen(8000, function() {
  console.log('출력');
  console.log('http://localhost:8000');
});