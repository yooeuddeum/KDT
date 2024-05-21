const fs = require("fs");
const newDate = require("./newDate.js");

// function newDate() {
//   const date = new Date();
//   const year = date.getFullYear();
//   const month = date.getMonth();
//   const day = date.getDate();
//   return year + "-" + month + "-" + day;
// }
// console.log(newDate());

const htmlMarkup = {
  head: {
    title: "제이슨 연습",
  },
  body: {
    header: "메뉴부분",
    main: "메인부분",
    footer: "하단부분",
  },
};

let convertjson = JSON.stringify(htmlMarkup);

const test = fs.writeFileSync(`${newDate()}-text.txt`,"hello","utf-8",(error) => {
    if (error) {
      console.log("파일만드는 것 에러");
      console.log("에러내용:", error);
    }
    console.log("저장이 되었음");
  }
);

// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(year + "-" + month + "-" + day);

// const test = fs.writeFile("test.txt", "hello", "utf-8", (error) => {
//   if (error) {
//     console.log("파일만드는 것 에러");
//     console.log("에러내용:", error);
//   }
//   console.log("저장이 되었음");
// });
