const fs = require("fs");
// const http = require(`http`);
const { type } = require("os");

function loadPokemonNames(path) {
  try {
    if (typeof path === "string") {
      const pokemonValue = fs.readFileSync(path, "utf8");
      return JSON.parse(pokemonValue);
    }
  } catch (error) {
    console.error("에러 내용:", error);
  }
}
const data = loadPokemonNames("pol.json");

function poketList() {
 
  for (let i = 0; i < data.length; i++) {
    if(i % 2 == 0){
      // fs.writeFileSync(`./public//v1/poketmonZZAK/${[i]}${data[i]}.html`, `<h1>${data[i]}<h1>`);
      // fs.writeFileSync(`${[i]}${data[i]}.html`, `<h1>${data[i]}<h1>`);
    }
    else {
      // fs.writeFileSync(`./public//v1/poketmonHOl/${[i]}${data[i]}.html`, `<p>${data[i]}<p>`);
      // fs.writeFileSync(`${[i]}${data[i]}.html`, `<p>${data[i]}<p>`);
    }
    console.log(data[i]);
  }
  fs.readdir('public/v1/poketmonHol', (error) => {
    if (error) {
      fs.mkdirSync('public/v1/poketmonHOl',  { recursive: true });
      fs.mkdirSync('public/v1/poketmonZZAK',  { recursive: true });
    }
  });     
}
poketList();
    
      
    
    
     


