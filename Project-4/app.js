let fromData = {
  a: "1. 꽁꽁 얼어 붙은",
  b: "2. 대전천",
  c: "3. 고양이가 날라 다닙니다",
  d: "4. 고양이가 기어 다닙니다",
};

function a() {
  console.log(fromData.a);
}
function b() {
  console.log(fromData.b);
}
function c() {
  console.log(fromData.c);
}

setTimeout(() => {
  console.log(fromData.d);
}, 3000);

a();
b();
c();
