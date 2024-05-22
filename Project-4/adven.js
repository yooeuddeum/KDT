// setTimeout(() => {
//   console.log("1. 너구리가 공중부양");
//   setTimeout(() => {
//     console.log("2. 공중부양");
//   }, 1000);
// }, 1000);

// setTimeout(function () {
//   console.log("1. 너구리가 공중부양");

//   a();
// }, 1000);

// function a() {
//   setTimeout(function () {
//     console.log("2. 공중부양");
//   }, 1000);
// }

// 비동기 함수를 동기화 한 것 -> callback함수

// setTimeout(function() {
//   console.log("1.배성빈");

//   setTimeout(function() {
//     console.log("2.김정수");

//     setTimeout(function() {
//       console.log("3.조우식");
//     }, 1000);

//   }, 2000);

// }, 3000);

setTimeout(()=>{
  console.log("1.하이");
  a();
}, 3000);

function a(){
  setTimeout(()=>{
    console.log("2.hello");
  }, 2000)
}
