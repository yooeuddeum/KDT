// function userLoginData() {
//   // body태그안에 id 이름이 user_id인 value값 가져오고 선언된 userID에 할당해줘
//   let userID = document.getElementById("user_id").value;
//   // console.log(userID); // 값이 잘 할당 되었는지 콘솔로 확인해줘

//   // body태그안에 id 이름이 user_pw인 value값 가져오고 선언된 userPw에 할당해줘
//   let userPw = document.getElementById("user_pw").value;
//   // console.log(userPw); // 값이 잘 할당 되었는지 콘솔로 확인해줘

//   // 함수 내 지역변수 선언
//   const jinID = "user01";
//   const jinPW = "user123";

//   if (userID === jinID) {
//     if (userPw === jinPW) {
//       alert("로그인 됐어");
//     } else {
//       alert("비밀번호를 다시 확인해줘");
//     }
//   } else {
//     alert("아이디를 다시 확인해줘");
//     location.reload();
//   }
// }

// const button = document.getElementById('btn');
// // console.log(button);

// button.addEventListener('click', userLoginData);

//-----------------------------------------------------------

const button = document.getElementById("btn");
// console.log(button);

button.addEventListener("click", () => {
  // body태그안에 id 이름이 user_id인 value값 가져오고 선언된 userID에 할당해줘
  let userID = document.getElementById("user_id").value;
  // console.log(userID); // 값이 잘 할당 되었는지 콘솔로 확인해줘

  // body태그안에 id 이름이 user_pw인 value값 가져오고 선언된 userPw에 할당해줘
  let userPw = document.getElementById("user_pw").value;
  // console.log(userPw); // 값이 잘 할당 되었는지 콘솔로 확인해줘

  // 함수 내 지역변수 선언
  const jjinID = "user01";
  const jjinPW = "user123";

  if (userID === jjinID) {
    if (userPw === jjinPW) {
      alert("로그인 됐어");
    } else {
      alert("비밀번호를 다시 확인해줘");
    }
  } else {
    alert("아이디를 다시 확인해줘");
  }
});
