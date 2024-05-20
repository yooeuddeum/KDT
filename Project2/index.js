const app = require("http");
// console.log(http);
const fs = require("fs");
const { url } = require("inspector");
// console.log(fs);
const port = 2041;

const server = app.createServer((req, res) => {
  if (req.method == "GET" && req.url == "/") {
    const one = fs.readFileSync("./polder/MBTI.html", "utf8");
    res.statusCode = 200; 
    res.setHeader("Content-Type", "text/html;");
    res.write(one);
    res.end();
  }

  if (req.url == "/home.css") {
    const two = fs.readFileSync("./polder/home.css", "utf8");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/css;");
    res.write(two);
    res.end();
  }

  if (req.url == "/style.css") {
    const three = fs.readFileSync("./polder/style.css", "utf8");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/css;");
    res.write(three);
    res.end();
  }

  if (req.url == "/firstpage.js") {
    const four = fs.readFileSync("./polder/firstpage.js", "utf8");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/javascript;");
    res.write(four);
    res.end();
  }

  if (req.url == "/img/arrow.svg") {
    const five = fs.readFileSync("./polder/arrow.svg", "utf8");
    res.statusCode = 200;
    res.setHeader("Content-Type", "img/arrow.svg;");
    res.write(five);
    res.end();
  }
  console.log(req.url);
  // console.log(req.method);
});


fs.readdir("polder", (error) => {
  if (error) {
    fs.mkdirSync("polder", { recursive: true });
  }
});

server.listen(port, function () {
  console.log("http://localhost:2041/");
});
