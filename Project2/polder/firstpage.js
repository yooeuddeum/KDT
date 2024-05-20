// // 가장 큰 div 가져오기
// const container = document.getElementById("container");
// // console.log(container);
// const headerContainer = document.getElementById("header-container");
// // console.log(headerContainer);
// const content = document.getElementById("content");
// // console.log(content);

// 입력된 색상 값과 해당하는 MBTI 유형을 매핑하는 객체로 만들꺼야

const colorMBTIMap = {
  "#efb578": "ENFP",
  "#c1d6a7": "ESTP",
  "#d3ffce": "ESFP",
  "#7fdaf4": "ENTP",
  "#fdb924": "ESTJ",
  "#ded6d8": "ESFJ",
  "#869c98": "ENFJ",
  "#834e56": "ENTJ",
  "#efb578": "ENFP",
  "#e5f4fb": "ISFP",
  "#e8e8fa": "INFP",
  "#fbd4f2": "INTP",
  "#fff85b": "ISTJ",
  "#ffb300": "ISFJ",
  "#ff004c": "INFJ",
  "#00ccff": "INTJ",
  "#00daff": "ENFP",
  "#ff2500": "ENFP",
};
// console.log(colorMBTIMap);

// 색상 값을 입력받아서 해당하는 MBTI 유형을 반환할꺼야
function getColorType(color) {
  return colorMBTIMap[color]; // 매핑된 MBTI 유형을 반환할꺼야
}
  
// 페이지가 로드될 때 실행시킬꺼야
window.addEventListener("load", () => {
  const itemsContainer = document.querySelector(".items");
  console.log(itemsContainer); //배열안에 객체

  // 각 아이템에 대한 정보를 배열에 담을꺼야

  const itemsList = [
    { id: 1, color: "#efb578" },
    { id: 2, color: "#c1d6a7" },
    { id: 3, color: "#d3ffce" },
    { id: 4, color: "#efb578" },
    { id: 5, color: "#7fdaf4" },
    { id: 6, color: "#fdb924" },
    { id: 7, color: "#ded6d8" },
    { id: 8, color: "#869c98" },
    { id: 9, color: "#834e56" },
    { id: 10, color: "#efb578" },
    { id: 11, color: "#e5f4fb" },
    { id: 12, color: "#e8e8fa" },
    { id: 13, color: "#fbd4f2" },
    { id: 14, color: "#fff85b" },
    { id: 15, color: "#ffb300" },
    { id: 16, color: "#ff004c" },
    { id: 17, color: "#00ccff" },
    { id: 18, color: "#00daff" },
    { id: 19, color: "#ff2500" },
  ];
  // console.log(itemsList);


  // 각 아이템에 대한 HTML 코드를 만들어주고 itemsList length만큼 추가 시켜줄꺼야

  //for문으로 반복

  for (let i = 0; i < itemsList.length; i++) {
    const item = itemsList[i];
    const li = document.createElement("li");
    li.classList.add("item");
    // console.dir(li);

    //component 방식으로 표현
    li.innerHTML = ` 
    <div class="item-id">${item.id}</div>
    <div class="item-mbti">${getColorType(item.color)}</div>
    <div class="item-arrow">
        <img class="item-arrow-icon" src="./img/arrow.svg" alt="화살표">
    </div>
    <div class="item-color-chip" style="background-color: ${item.color}"></div>
      <div class="item-color-code">${item.color}</div>`;

    itemsContainer.appendChild(li);
  }



  // forEach로 반복

  // itemsList.forEach((item) => {
  //   const li = document.createElement("li");
  //   li.classList.add("item");

  //   li.innerHTML = `
  //   <div class="item-id">${item.id}</div>
  //   <div class="item-mbti">${getColorType(item.color)}</div>
  //   <div class="item-arrow">
  //       <img class="item-arrow-icon" src="./img/arrow.svg" alt="화살표">
  //   </div>
  //   <div class="item-color-chip" style="background-color: ${item.color}"></div>
  //     <div class="item-color-code">${item.color}</div>`;

  //   itemsContainer.appendChild(li);
  // });

});
