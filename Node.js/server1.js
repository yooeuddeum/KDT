const fs = require(`fs`);
// const { Http2ServerRequest } = require("http2");

// fs.appendFile(`test.txt`, `hello`, (err)=>{
//   if(err){
//     throw err;}
//     console.log(`file has bees saved`)
  
// })


const pok = `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Test</title>
</head>
<body>
  <h1>Write</h1>
  <p>string 데이터를 써야 하는 파일 시작 부분의 오프셋입니다 . position그렇지 않은 경우 number데이터는 현재 위치에 기록됩니다.</p>
  <p>It is so difficult to write EACH ELEMENT ON MY HAND :(</p>
</body>
</html>`



fs.writeFile(`pok.html`, pok, (err)=>{
  // if(err){
  //   console.log(err)
  // }
  // console.log(`protocol activated`)
  
  
  fs.readFile(`pok.html`,`utf-8`,(err, data)=>{
    // if(err){
    //   console.log(`error has beed occured`)
    // }
  // console.log(data)

  const server = http.createServer((req , res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
    })
    server.listen(3303, function(){
      console.log("http://localhost:3303")
    })

})

})
const http = require(`http`);