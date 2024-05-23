// const rl = require("readline");
// const fs = require("fs");

// // const pokemonData = fs.readFileSync("./pokemon.json", "utf8");

// const pokemonData = JSON.parse(fs.readFileSync("./pokemon.json"));
// // console.log(pokemonData);
// // console.log(typeof(pokemonData));
// // console.log(Array.isArray(pokemonData));

// const readLine = rl.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readLine.question("포켓몬스터 이름 작성해주세요 :", function (answer) {
//   for (let i = 0; i < pokemonData.length; i++) {
//     console.log(`포켓몬 번호${i}`);
//     if (answer === pokemonData[i]) {
//       console.log("포켓몬스터 이름이 존재합니다.");
//       readLine.close();
//       break;
//     } else {
//       console.log("포켓몬스터 이름이 존재하지 않습니다.");
//       readLine.close();
//     }
//   }
// });

// readLine.question("포켓몬스터 이름 작성해주세요 :", (answer) => {
//   let data = [];
//   pokemonData.forEach((element) => {
//     if (answer === element) {
//       // console.log("포켓몬스터 이름이 존재합니다.");
//       data.push(element);
//       readLine.close();
//     }
//   });
//   console.log(data);
//   if(data.length === 0){
//     console.log("포켓몬 데이터가 존재하지 않습니다.");
//   } 
//   else {
//     console.log("포켓몬이 존재합니다.")

//     fs.writeFileSync('./searchdata.json', JSON.stringify(data), "utf-8" , (err) => {
//       if(err){
//         console.log("err");
//       }
//     })
//   }
//   readLine.close();
// });

