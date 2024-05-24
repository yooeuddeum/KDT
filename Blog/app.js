//★ 모듈 불러와
const app = require("http");
// console.log(app);
const fs = require("fs");
// console.log(fs);
const path = require("path");
// console.log(path);
const { URLSearchParams } = require("url"); //  URL 쿼리 문자열을 파싱하는데 사용

const server = app.createServer((req, res) => {
  //  app 서버를 만들고 요청의 처리를 위해 콜백함수를 전달할게
  if (req.method === "GET") {
    if (req.url === "/") {
      // 요청 방식이 GET이고 url이 "/"인지 확인할게
      // 요청에 의한 방식의 경로가 "/"이 맞다면 나는 index.html을 읽고 클라이언트한테 전송할게
      // 만약 요청 방식이 아닌게 확인되면 난 찾을 수 없다는 응답을 보낼꺼야
      fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("500 코드는 서버 자체 에러");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 코드를 찾을 수가 없어");
    }
  } else if (req.method === "POST") {
    // 요청이 POST방식인지 1차적으로 확인하고 그 다음에 /submit의 대한 경로 요청인지 확인할게
    ///submit의 대한 경로 요청이라면 난 POST의 data를 받아와서 파일에 저장할꺼야
    // 빈 문자열로 대입되어있는 body 변수에 그리고 응답할게
    // 만약 조건에 일치하지 않다면 찾을 수 없다는 응답을 보낼꺼야
    if (req.url === "/submit") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const params = new URLSearchParams(body);
        const title = params.get("title");
        const content = params.get("content");
        const postData = `Title: ${title} Content: ${content}`;
        fs.appendFile("posts.txt", postData, (err) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("500 code는 서버 자체 에러");
            return;
          }
        });
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 찾을 수가  없어");
    }
  }
});

const PORT = 8263;
server.listen(PORT, () => {
  console.log("서버 가동");
  console.log(`http://localhost:${PORT}`);
});