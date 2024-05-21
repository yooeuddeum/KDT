const fs = require("fs");
const newDate = require('./newDate.js');

// function newDate() {
//   const date = new Date();
//   const year = date.getFullYear();
//   const month = date.getMonth();
//   const day = date.getDate();
//   return year + "-" + month + "-" + day;
// }
// console.log(newDate());

const testJson = {
  name: '유으뜸',
  age: 3333333,
  city: '대전',
}

let convertjson = JSON.stringify(testJson);

const test = fs.writeFileSync(`${newDate()}-text.txt`, "hello","utf-8", (error) => {
  if (error) {
    console.log("파일만드는 것 에러");
    console.log("에러내용:", error);
  }
  console.log("저장이 되었음");
});



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


