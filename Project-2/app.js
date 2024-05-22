// 코드 리딩 연습 (뜯어보기)

const app = require("http"); //http서버와 클라이언트를 사용하기 위해
// console.log(app);
const fs = require("fs"); // fs 모듈로 입 출력 처리
// console.log(fs);
const path = require("path"); //파일 및 디렉터리 경로 작업을 위한 유틸리티
const { error } = require("console");
const { URLSearchParams } = require("url");
const { title } = require("process");
const { json } = require("stream/consumers");
// console.log(path);

const server = app.createServer((req, res) => {
  if (req.method == "GET") {
    //요청한 메소드가 GET방식 일때
    if (req.url == "/") {
      // 요청한 url이 "/"" 일때
      // path -> 파일 이름 또는 파일 설명자 , fs.readfile() 함수는 전체 파일을 버퍼링함 // join : 단일 경로로 접근
      fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
        if (err) {
          // writeHead : 요청에 대한 응답 헤더 // 500 : 3자리의 http 상태코드
          // text/plain은 해당 문서를 플레인 텍스트로 만들어 html 태그를 모두 보여주는 데이터 타입
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("500 코드는 서버 자체 에러");
          return; // 반환
        }
        res.writeHead(200, { "Content-Type": "text/html; charset = utf-8" });
        res.end(data);
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/html; charset = utf-8" });
      res.end("404 code는 찾을 수 없음");
    }

    // POST 방식
  } else if (req.method == "POST") {
    if (req.url === "/submit") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
         // chunk -> 한 개의 묶여진 정보 , 여러개의 아이템을 묶어 놓은 하나의 덩어리
         // toString() -> object 객체의 메서드이며 , 해당 object를 표현하는 문자열을 반환
      });
      req.on("end", () => {
        const parseData = new URLSearchParams(body);
        const title = parseData.get("title");
        const content = parseData.get("content");

        const jsonData = {
          title: title,
          content: content,
        };

        // json.stringify() -> 메서드는 javascript값이나 객체를 JSON문자열로 변환
        const jsonDataString = json.stringify(jsonData, null, 2);
        // path -> 파일 이름 또는 파일 설명자 , fs.readfile 함수는 전체 파일을 버퍼링함
        // join : 단일 경로로 접근
        fs.writeFile(
          path.join(__dirname, "data.json"), //__dirname : 현재 모듈의 디렉터리 이름 = path.dirname() 같은 의미
          jsonDataString,
          (err) => {
            if (err) {
              res.writeHead(500, { "Content-Type": "text/plain" }); // 컨텐트 타입을 텍스트 플레인으로 적용
              res.end("500 코드는 서버 자체 에러");
              return;
            }
            res.writeHead(200, {
              "Content-Type": "application/json; charset = utf-8", // 에이잭스 요청에서는 바디에 application/json 사용
            });
            let jsonResponse = json.stringify({
              message: "데이터가 성공적으로 저장됨",
            });
            res.end(jsonResponse);
          }
        );
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/html; charset = utf-8" });
      res.end("404 code는 찾을 수 없음");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset = utf-8" });
    res.end("404 code는 찾을 수 없음");
  }
});

const port = 2020; // port
server.listen(port, () => {
  console.log("서버 가동");
  console.log(`http://localhost:${port}`);
});
