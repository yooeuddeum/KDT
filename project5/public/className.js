const names = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "최유진",
  "황재민",
];

//----------------이름------------------★

const input = document.getElementById("name");
console.log(input);

const colorDiv = document.querySelectorAll(".color_item");
console.log(colorDiv);
for (let i = 0; i < colorDiv.length; i++) {
  console.log(colorDiv[i]);
}

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const inputValue = input.value;
    const NameValue = names.includes(inputValue);

    if (NameValue) {
      colorDiv[0].style.backgroundColor = "red";
    } else {
      colorDiv[0].style.backgroundColor = "green";
    }
  }
  //----------------비밀번호------------------★
  const pwInput = document.getElementById("password");
  console.log(pwInput);
});

//----------------비밀번호 확인------------------★
//--------------- 이메일 주소------------------★
//--------------- 핸드폰 번호------------------★
