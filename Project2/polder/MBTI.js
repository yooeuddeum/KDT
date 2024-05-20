// event 발생시 16진수 컬러 코드를 입력했을때 해당되는 색으로 변경 

// const colorInput = document.querySelector('.color-input');

// function colorChange (){
//    const colorVal = colorInput.value;
//    if(colorVal.length == 7){
//       const colorChip = document.querySelector('.color-input-chip');
//       colorChip.style.backgroundColor = colorVal;
//       console.log(colorVal.length);
//      }
//    console.log(colorVal);
// };

// colorInput.addEventListener('change', colorChange);

// 다른 방법 // 

// console.log(colorInput);
// colorInput.addEventListener('change', () =>{
//  const colorVal = colorInput.value;
//  if(colorVal.length == 7){
//     const colorChip = document.querySelector('.color-input-chip');
//     colorChip.style.backgroundColor = colorVal;
//     console.log(colorChip);
//    }
//  console.log(colorVal);
// });


       
// const mbtiList = document.querySelector('section');
// console.log(mbtiList);


const colorInput = document.querySelector('.color-input');

function getColorType(color) {
    // 각 색깔에 대한 MBTI 유형을 가져올 객체를 넣을꺼고 16진수가 key고 MBTI가 value가 될꺼야
    const colorList = {
        '#FF0000': 'ENTJ',
        '#fbd4f2': 'INTP',
        '#0000FF': 'ESFJ',
        '#fff85b': 'ISTJ',
        '#EFB578': 'ISTP',
        '#e5f4fb': 'ISFP',
        '#e8e8fa': 'INFP',
        '#ffb300': 'ISFJ',
        '#ff004c': 'INFJ',
        '#00ccff': 'INTJ',
        '#00daff': 'ENFP',
        '#c1d6a7': 'ESTP',
        '#d3ffce': 'ESFP',
        '#7fdaf4': 'ENTP',
        '#fdb924': 'ESTJ',
        '#869c98': 'ENFJ',
      };
      return colorList[color]; // 색상에 해당하는 MBTI 유형을 반환할꺼야
    };
      
        
    // event change함수를 사용해서 실행할 코드를 작성할꺼야
    function colorChange() { //함수명은 colorChange로 할게
        const colorVal = colorInput.value; // 상수 변수 colorVal을 선언하고 colorInput.value 을 통해 내가 입력한 색상을 가져올꺼야
        const LENGTH_LIMIT = 7;  
        if (colorVal.length === LENGTH_LIMIT) { // 만약 내가 불러올 색상의 길이가 7개라면 이 함수를 실행해줘
            const colorChip = document.querySelector('.color-input-chip'); // 또 하나의 상수 변수 colorChip을 선언하고 color-input-chip을 가져올꺼고
            colorChip.style.backgroundColor = colorVal; //입력한 배경색으로 바꿀꺼야
            console.log(colorVal.length);
            const mbtiType = getColorType(colorVal); // 상수 선언한 mbtiType로 체인지 이벤트를 작동시켰을때 위에 만들어 놓은 객체를 통해 mbti유형도 같이 가져올게
            console.log(mbtiType);
        }
        console.log(colorVal); // 16진수 코드 입력하면 선택된 값에 맞게 색상과 MBTI가 찍히도록 해놨음
    }
    
    colorInput.addEventListener('change', colorChange);  