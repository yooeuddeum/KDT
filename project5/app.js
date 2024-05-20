const app = require("http");
// console.log(app);
const fs = require("fs");
// console.log(fs);

const server = app.createServer((req, res) => {
  if (req.method == "GET") {
    if (req.url == "/") {
      const one = fs.readFileSync("./public/index.html", "utf8");
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write(one);
      res.end();
    }
    if (req.url == "/className.js") {
      const two = fs.readFileSync("./public/className.js", "utf8");
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/javascript");
      res.write(two);
      res.end();
    }
  }
  console.log(req.url);
});

const port = 9880;

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("서버 돌아감");
  console.log(`http://localhost:${port}`);
});

