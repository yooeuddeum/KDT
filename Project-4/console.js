// setTimeout(callback, delaytime);

// 스탑워치 같은 개념의 함수 -> 지정된 시간에 실행되는 함수(순서 상관없음 우선이 되는것부터)

// callback -> 하고싶은것 // delaytime -> 지정된 시간에 실행

// setTimeout 유일한 javascript 비동기

// 동기함수 사이에서는 안지킴 / 비동기함수 사이에서는 지킴

setTimeout(function(){
  console.log("고양이가 날라다닙니다")
}, 3000);
setTimeout(function(){
  console.log("강아지가 날라다닙니다")
}, 3000);
setTimeout(function(){
  console.log("너구리가 날라다닙니다")
}, 3000);
