const fs = require("fs");

function loadPokemonNames(path) {
  try {
    if (typeof path === "string") {
      const pokemonValue = fs.readFileSync(path, "utf8");
      return JSON.parse(pokemonValue);
    }
    // else 를 사용하는 대신 try catch 문법을 사용해서 에러를 잡아내는 것이
    // '에러 처리'라는 것을 명시적으로 이야기 하는 좋은 어휘
  } catch (error) {
    // 매개변수 error는 catch구문이 실행될 때 자동으로 전달되는 변수
    console.error("에러 내용:", error);
  }
}

const data = loadPokemonNames("pol.json");
console.log(data);

const poket = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div></div>
</body>
</html>`;

fs.writeFile(`poket.html`, poket, (err) => {
  if (err) {
    // for (let i = 0; i < data.length; i++) {
    //   console.log();
    // }
  }

  fs.readFile(`poket.html`, `utf-8`, (err, data) => {
    if (err) {
      console.log(data);
    }

    const server = http.createServer((req, res) => {
      res.writeHead(400, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
    server.listen(7303, () => {
      console.log("http://localhost:7303");
    });
  });
});

// ----------------------------------------------

const EventEmitter = require("node:events");
const myEmitter = new EventEmitter();

myEmitter.on("event", () => {
  console.log("A");
});
myEmitter.on("event", () => {
  console.log("B");
});

console.log(myEmitter.listeners("event"));

myEmitter.emit("event", 1, 2, 3, 4, 5);
