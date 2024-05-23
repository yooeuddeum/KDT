// const rl = require("readline");
// // console.dir(rl);

// let inOut = {
//   input: global.process.stdin,
//   output: global.process.stdout,
// };

// const readLine = rl.createInterface(inOut);

// readLine.question("너의 이름은 무엇입니까 :", (answer) => {
//   console.log("니가 쓴 대답은 :", answer);
//   readLine.close();
// });

// const rl = require("readline");
// // console.dir(rl);

// let inOut = {
//   input: global.process.stdin,
//   output: global.process.stdout,
// };

// const readLine = rl.createInterface(inOut);

// readLine.question("내가 좋아하는 동물은? ", (answer) => {
//   if (answer == "멍멍이") {
//     console.log("니가 쓴 대답은:  ", answer);
//   } else {
//     console.log("땡 틀렸음ㅋㅋ");
//   }

//   readLine.close();
// });

const rl = require("readline");
// console.dir(rl);

let inOut = {
  input: global.process.stdin,
  output: global.process.stdout,
};

const readLine = rl.createInterface(inOut);

readLine.question(
  "만들고 싶은 HTML 파일이름을 작성해주세요. : ",
  function (answer) {
    let data = answer;

    const fs = require("fs");
    fs.writeFileSync(data + ".html", "hello", "utf-8", function (error) {
      if (error === true) {
        console.log("파일 생성 실패");
      } else {
        console.log("파일 생성 성공");
      }
      readLine.close();
    });
  }
);
