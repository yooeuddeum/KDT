// const studentNamesArray = require('./names-data.js');
// // # javascript 방식 - 선언형
// studentNamesArray.forEach((name) => {
//   console.log(name);
// });
const a = require('./names-data.js');
// # javascript 방식 - 선언형
a.forEach((name) => {
  console.log(name);
});

// function na(array, callback){
//   callback(array);
// }

function na(array){
  for(let i = 0; i < array.length; i++){
    let name = array[i];
    console.log(name);
  }
}

// # 일반 반복문 방식 - 절차형
// for(let i = 0; i < studentNamesArray.length; i++) {
//   console.log(studentNamesArray[i]);
// }