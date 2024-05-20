const section = document.getElementById("root");
// console.log(root);
const headerMenu = document.querySelector("#header_menu");
// console.log(headerMenu);
const headerMain = document.getElementById("header_main");
// console.log(headerMain);
const headerItem = document.querySelectorAll(".header_item");
console.log(headerItem);



headerMenu.addEventListener("click", (e) => {
  if (e.target == headerItem[0]) {
    headerMain.style.background = "#d9d9d9";
  } else if (e.target == headerItem[1]) {
    headerMain.style.background = "#BDDE86";
  } else if (e.target == headerItem[2]) {
    headerMain.style.background = "#86DEA9";
  } else if (e.target == headerItem[3]) {
    headerMain.style.background = "#86A9DE";
  } else if (e.target == headerItem[4]) {
    headerMain.style.background = "#AD86DE";
  } else {
    headerMain.style.backgroundColor = "white";
  } 
});
