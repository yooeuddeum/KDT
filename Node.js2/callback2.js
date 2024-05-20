function a(a, b){
  return a + b;
}

function b (a, b, callback){
  callback(a, b);  // 인자를 전달한다. (인수인계)
}

function add(a, b){
  return a + b;
}

// b(1, 2, function(a, b){
//     console.log(a + b); // 익명함수
// });

// b(1, 2, function(a, b){
//   console.log(a * b); // 호출할때 함수를 정의한다. 재활용성은 꽝
// });

// b(1, 2, function(a, b){
//   if(b == Number()){
//     b = String();
//   } // 호출할때 함수를 정의한다. 재활용성은 꽝
//   console.log("이");
// });


// function calcBooha(a, b, callback) {
//   callback(a, b);
// }

// calcBooha(10, 20, function(a, b) {
//   let result = a + b;
//   return result;
// });

// calcBooha(10, 20, function(a, b) {
//   let result = a - b;
//   return result;
// });

// b(10, 20, (a, b) => {
//   console.log(a * b);
// })

// b(10, 20, (a, b) => {
//   console.log(a + b);
// })

// b(10, 20, (a, b) => {
//   console.log(a - b);
// })




