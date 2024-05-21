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

const colorDiv = document.querySelector(".color_item");
console.log(colorDiv);
// for (let i = 0; i < colorDiv.length; i++) {
//   console.log(colorDiv[i]);
// }

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const inputValue = input.value;
    const NameValue = names.includes(inputValue);

    if (NameValue) {
      colorDiv.style.backgroundColor = "red";
    } else {
      colorDiv.style.backgroundColor = "green";
    }
  }
})


const passwordInput = document.getElementById("password");
const passwordColorDiv = document.querySelector(".form-group:nth-child(2) .color_item");

passwordInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const passwordValue = passwordInput.value;
    const passwordRegex = /^[a-zA-Z]{1,}[0-9]{4}$/;

    passwordColorDiv.style.backgroundColor = passwordRegex.test(passwordValue) ? "red" : "green";
  }
});

//----------------비밀번호 확인------------------★

const confirmPasswordInput = document.getElementById("confirm_password");
const confirmPasswordColorDiv = document.querySelector(".form-group:nth-child(3) .color_item");

confirmPasswordInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const confirmPasswordValue = confirmPasswordInput.value;
    const passwordValue = passwordInput.value;

    confirmPasswordColorDiv.style.backgroundColor = (confirmPasswordValue === passwordValue && confirmPasswordValue !== "") ? "red" : "green";
  }
});

//--------------- 이메일 주소------------------★

const emailInput = document.getElementById("email");
const emailColorDiv = document.querySelector(".form-group:nth-child(4) .color_item");

emailInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const emailValue = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailColorDiv.style.backgroundColor = emailRegex.test(emailValue) ? "red" : "green";
  }
});

//--------------- 핸드폰 번호------------------★

const phoneInput = document.getElementById("phone");
const phoneColorDiv = document.querySelector(".form-group:nth-child(5) .color_item");

phoneInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const phoneValue = phoneInput.value;
    const phoneRegex = /^01[0-9]-\d{3,4}-\d{4}$/;

    phoneColorDiv.style.backgroundColor = phoneRegex.test(phoneValue) ? "red" : "green";
  }
});