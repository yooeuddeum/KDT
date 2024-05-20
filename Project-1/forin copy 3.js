function forObject() {
  try {
    if (typeof a === "object") {
      if (typeof b === "object") {
        // let result = a.first + b.first; // first -> 리터럴 // 일회용임
        // console.log(result);
        let values = [];
        for (let key in a) {
          // 초기화 된 변수 a의 키값이 a를 확인할때
          // console.log(key);
          values.push(a[key]);
          // console.log(values);
        }
        for (let key in b) {
          values.push(b[key]);
        }
        console.log(values);
        let add = values.reduce((a, b) => {
          return a + b;
        });
        console.log("다 더한값 :", add);
      }
    }
  } catch (error) {
    console.log("error");
    console.log("객체아님");
  }
}

const a = { first: 1 };
const b = { first: 2 };

forObject(a, b);
