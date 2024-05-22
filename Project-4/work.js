// console.time('작업');
// console.time('첫번째 setTimeout');
// setTimeout(() => {
//   console.timeLog('첫번째 setTimeout');
//   console.log("1. Good");
//   console.timeEnd('첫번째 setTimeout');
// }, 1000);
// console.time('2');
// setTimeout(() => {
//   console.log("2. bye");
//   console.timeEnd('2');
// }, 1000);
// setTimeout(() => {
//   console.log("3. okey");
// }, 1000);
// console.timeEnd('작업');

let counter = 0;

const timer = function () {
  setTimeout(() => {
    console.log(counter + "vw");
    counter++;
    if (counter < 20) {
      timer();
    }
    else{
      console.log("멈춰");
    }
  }, 1000);
};
timer();
