// 랜덤 번호 지정
// 유저가 번호를 입력한다, 그리고 Go 라는 버튼을 누름
// 만약에 유저가 랜덤 번호를 맞추면, 맞췄습니다!
// 랜덤 번호가 < 유저 번호 Down!
// 랜덤 번호가 > 유저 번호 Up!
// Reset 버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다 쓰면 게임이 끝난다. 버튼 Disable
// 유저가 1 ~ 100 범위 밖의 숫자를 입력하면 알려준다. 기회 차감 X
// 유저가 이미 입력한 숫자를 반복 입력하면 알려준다. 기회 차감 X

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let resultButton = document.getElementById("result-button");
let chanceArea = document.getElementById("chance-area");
let chances = 5;
let gameOver = false;
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
resultButton.addEventListener("click", result);
userInput.addEventListener("focus",function(){userInput.value = ""})

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log("정답", computerNum);
}

function play(){
    let userValue = userInput.value;

    if(userValue<1 || userValue>100){
        resultArea.textContent="1~100 사이의 값을 입력해 주세요."
        return;
    }
    else if(history.includes(userValue)){
        resultArea.textContent= "이미 입력된 값입니다."
        return;
    }
    chances -- ;
    chanceArea.textContent = `남은 기회 : ${chances}번`;
    if(userValue < computerNum) {
        resultArea.textContent = "UP!!!"
    }else if(userValue > computerNum) {
        resultArea.textContent = "DOWN!!!"
    }else {
        resultArea.textContent = "맞췄습니다!!!"
        gameOver = true;
    }

    history.push(userValue)

    if(chances < 1 ){
        gameOver=true;
    }

    if(gameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
    // user input창이 깨끗하게 정리되고
    userInput.value = "";
    // 새로운 번호가 생성이 되고
    pickRandomNum();
    chances = 5;
    gameOver = false;
    playButton.disabled = false;

    resultArea.textContent = "결과값이 여기 나옵니다."
}

function result(){
    resultArea.textContent = computerNum
}
pickRandomNum();