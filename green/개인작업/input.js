// * 사용자 데이터를 저장할 빈 배열
let user = [];

// 버튼 태그 불러옴
const button = document.getElementById("btn");
console.log(button);

// * 버튼 요소에 클릭 이벤트 부여하고 이벤트가 발생했을때 실행해서
// * 단발성 기능 수행 / 아이디와 비밀번호가 빈 문자열이 아니라면 실행이 되게끔 수정
// * 데이터 값이 추가되면 입력창에서 값을 지움
// * 만약 input창에 아무것도 입력안하고 버튼 클릭시 에러가 뜨게 했음
// * 마지막 초기화의 기준은 브라우저상에서 새로고침을 하거나 창을 닫을시 초기화 그렇지 않다면 데이터는 저장 된 상태에서 계속 유지
// * 보안적인 부분에서는 취약한 단점 또한 이 자쓰 코드는 폼 태그 기준에서 서버로 데이터를 보내지 않는 방식임
// * 그래서 해당 방식은 버튼 type이 button일때 자쓰 자체에서 기능 구현으로 사용 용도
button.addEventListener("click", () => {
  const userIDInput = document.getElementById("user_id");
  const userPWInput = document.getElementById("user_pw");
  const userID = userIDInput.value;
  const userPW = userPWInput.value;

  if (userID !== "" && userPW !== "") {

    user.push({ userID, userPW });
    console.log("회원가입이 가능한 아이디와 비밀번호입니다.");
    console.log("현재 사용자 데이터:", user);

    userIDInput.value = "";
    userPWInput.value = "";
  } 
  else {
    console.error("아이디나 비밀번호를 입력해주세요.");
  }
});

console.log("초기화된 데이터", user);
