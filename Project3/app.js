const app = require("http");
// console.log(app);
const fs = require("fs");
// console.log(fs);
const qs = require("node:querystring");
const { log } = require("console");

const server = app.createServer((req, res) => {
  if (req.method == "GET" && req.url == "/") {
    const one = fs.readFileSync("./public/index.html", "utf8");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(one);
    res.end();
  }
  if (req.url == "/input.js") {
    const two = fs.readFileSync("./public/input.js", "utf8");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/javascript");
    res.write(two);
    res.end();
  }

  // 특정 문자열로 시작하거나 끝나는지 확인 (startsWith)
  if (req.url.startsWith("/test")) {
    // 문자열을 배열로 자르는 메소드 (split)
    const loginData = req.url.split("?")[1];

    console.log(loginData);
    const data = qs.decode(loginData);
    // 입력 구문 분석 (qs) // if,else와 같은 개념(decode)
    // console.log(req.url.split[1]);
    console.log(data);
  }
  console.log(req.url);
  // console.log(req.method);
});

const port = 8087;

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("서버 돌아감");
  console.log(`http://localhost:${port}`);
});
