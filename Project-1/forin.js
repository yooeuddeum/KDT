function forObject() {
  try {
    if (typeof a === "object") {
      if (typeof b === "object") {
        // let result = a.first + b.first; // first -> 리터럴 // 일회용임
        // console.log(result);
        let values = [];

        function objectloop(array, object) {
          for (let key in object) {
            array.push(object[key]);
          }
        }
        objectloop(values, a);
        objectloop(values, b);

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
