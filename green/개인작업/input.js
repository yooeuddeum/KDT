// * 초기화 된 변수 배열에 데이터가 추가 될 곳
// * 계속 추가 될 수 있는 부분 / 임시로 하나만 설정
const user = [
  { userID: "user123", userPW: "pass1515" }
];

// * 해당 태그들 불러옴
const button = document.getElementById("btn");
console.log(button);

// * 해당 id와 pw이 값을 입력했을때 user 데이터 배열에 추가되게끔 유도
// * userID와 PW가 데이터 타입이 문자열인 형식일때만 적용 / 그게 아니라면 에러가 뜨게끔 적용
button.addEventListener("click", () => {
  const userID = document.getElementById("user_id").value;

  const userPW = document.getElementById("user_pw").value;

  if (typeof userID === "string" && typeof userPW === "string") {
    user.push({ userID, userPW });
    console.log("회원가입이 가능한 아이디와 비밀번호 입니다");
  } else {
    console.error("userID와 PW가 문자열이 아닙니다.");
  }
});

console.log(user)
console.log("초기화 된 데이터", user);
