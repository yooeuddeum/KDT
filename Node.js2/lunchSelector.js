const menuList = [
  ["주니어와퍼", "몬스터와퍼", "스테커버거","콰트로치즈", "와퍼"],
  ["쉑쉑버거", "핫도그", "밀크쉐이크", "스모크쉑버거"],
  "순두부찌개",
  ["치킨마요", "참치마요", "무슨마요", "도련님도시락"],
  ["짜장면", "짬뽕", "볶음밥", "잡채밥", "유린기"],
  "쭈꾸미",
  "함박스테이크",
  "마라탕",
  "곰탕",
  "돈까스",
  "쌀국수",
  "분식",
  "칼국수",
  "콩나물밥",
];




function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
// getRandomInt(0, array.length);

function lunchSelector(array) {
  const firstGetRandomIndex = getRandomInt(0, array.length);
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[firstGetRandomIndex])) {
      const randomIndex = getRandomInt(0, array[i].length);
      for (let j = 0; j < array[i].length; j++) {
        return array[firstGetRandomIndex][randomIndex];
        console.log
      }
      return array[randomIndex];
    }
  }
  return array[firstGetRandomIndex];
}
console.log(lunchSelector(menuList));
  




