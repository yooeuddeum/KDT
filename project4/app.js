const http = require("http");
const fs = require("fs");
const qs = require("node:querystring");

const server = http.createServer((request, response) => {
  if (request.method === "GET") {
    console.log("요청 URL 검사 :", request.url);
    if (request.url === "/") {
      const htmlData = fs.readFileSync("./public/index.html", "utf8");
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      response.write(htmlData);
      response.end();
    }

    if (request.url.startsWith("/test")) {
      const inputData = request.url.split("?")[1];
      const data = qs.decode(inputData);
      console.log(data);
    }
  }
});

const port = 8295;
server.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("서버 돌아감");
  console.log(`http://localhost:${port}`);
});
