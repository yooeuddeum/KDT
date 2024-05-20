// const a = function () {
//   console.log('hello');
// }
// a();

// const b = () => {
//   console.log('hi');
// }
// b();

function work(string){
  if(typeof(string == "string")){
    console.log(string);
  }
  else {
    console.error("에러");
  }

};
work('hi');
work(1);
work(false);

