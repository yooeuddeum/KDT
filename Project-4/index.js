const root = document.getElementById("root");
// console.log(root);
const div = document.createElement("div");
// console.log(div);
const btn = document.createElement("button");
// console.log(btn);


div.style.width = "250px";
div.style.height = "250px";
div.style.background = "darkgray";

btn.style.width = "100px";
btn.style.height = "100px";
btn.style.margin = "20px 70px";

root.appendChild(div);
root.appendChild(btn);

let moveR = false;
let moveL = {left: 0, state: true,};

btn.addEventListener("click", () => {
  setTimeout(() => {
    if (!moveR) {
      div.style.transition = "all 3s";
      div.style.transform = "translateX(-300px)";
      moveR = true;
    } else {
      div.style.transition = "all 3s";
      div.style.transform = "translateX(0)";
      moveR = false;
    }
  }, 1000);
});
