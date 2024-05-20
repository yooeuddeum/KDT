const app = require("http");
// console.log(app);
const fs = require("fs");
const port = 8085;

const server = app.createServer((req, res) => {
  if (req.method == "GET" && req.url == "/") {
    const one = fs.readFileSync("./event/Home.html", "utf8");
    res.setHeader("Content-Type", "text/html;");
    res.write(one);
    res.end();
  }
  if (req.url == "/style.css") {
    const two = fs.readFileSync("./event/style.css", "utf8");
    res.setHeader("Content-Type", "text/css");
    res.write(two);
    res.end();
  }
  if (req.url == "/headerMenu.js") {
    const three = fs.readFileSync("./event/headerMenu.js", "utf8");
    res.setHeader("Content-Type", "text/javascript");
    res.write(three);
    res.end();
  }
  if (req.url == "/Datatype.html") {
    const four = fs.readFileSync("./event/Datatype.html", "utf8");
    res.setHeader("Content-Type", "text/html");
    res.write(four);
    res.end();
  }
  if (req.url == "/Object_array.html") {
    const five = fs.readFileSync("./event/Object_array.html", "utf8");
    res.setHeader("Content-Type", "text/html");
    res.write(five);
    res.end();
  }
  if (req.url == "/function.html") {
    const six = fs.readFileSync("./event/function.html", "utf8");
    res.setHeader("Content-Type", "text/html");
    res.write(six);
    res.end();
  }
  if (req.url == "/if_for.html") {
    const seven = fs.readFileSync("./event/if_for.html", "utf8");
    res.setHeader("Content-Type", "text/html");
    res.write(seven);
    res.end();
  }
  console.log(req.url);
});

server.listen(port, () => {
  console.log("http://localhost:8085/");
});
