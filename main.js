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
let resultAreaImg = document.getElementById("main-img");
let userInput = document.getElementById("user-input");
let resultText = document.querySelector(".result-text");
let resetButton = document.getElementById("reset-button");
let resultButton = document.getElementById("result-button");
let chanceArea = document.getElementById("chance-area");
let levelArea = document.getElementById("level-area");
let inputArea = document.getElementById("input-area");
chances;
let gameOver = false;
let gameClear = false;
let history = []; // 유저가 입력한 기록

chanceArea.innerHTML = `남은 기회 : ${chances}번`;

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
resultButton.addEventListener("click", result);
userInput.addEventListener("focus",function(){userInput.value = ""})

function pickRandomNum(){
    // 랜덤숫자 뽑기 

    computerNum = Math.floor(Math.random() * 100)+1;
    // console.log("정답", computerNum);
}

function play(){
    // 숫자 추측하기

    let userValue = userInput.value;

    if(userValue<1 || userValue>100){
        resultText.textContent="1~100 사이의 값을 입력해 주세요."
        return;
    }
    else if(history.includes(userValue)){
        resultText.textContent= "이미 입력된 값입니다."
        return;
    }

    history.push(userValue)
    inputArea.innerHTML = `입력한 숫자 : ${history}`;
    if(userValue < computerNum) {
        resultAreaImg.src =
        "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif";
        resultText.textContent = "UP!!!"
    }else if(userValue > computerNum) {
        resultAreaImg.src ="https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif";
        resultText.textContent = "DOWN!!!"
    }else {
        gameClear=true;
    }
    chances -- ;
    chanceArea.innerHTML = `남은 기회 : ${chances}번`;


    if(gameClear == true){
        resultAreaImg.src ="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3RnejRnNzVkdWpkaXB1N2twMHgyZnJrYmY5eXdkc3FzdGpqNGt0NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YTbZzCkRQCEJa/giphy.gif";
        resultText.textContent = "맞췄습니다!!!"
        playButton.disabled = true;
    }
    if(chances < 1 & gameClear==false){
        gameOver=true;
    }
    if(gameOver == true){
        resultAreaImg.src =
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWg0dWtrczVwdG5mcmtudjF5cHppcGNma2QyODFzY25ueXQ5bGEzcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eJ4j2VnYOZU8qJU3Py/giphy.gif"
        resultText.textContent = `탈 락 탈 락`
        playButton.disabled = true;
    }
}

function reset(){
    // user input창이 깨끗하게 정리되고
    userInput.value = "";
    history = [];
    // 새로운 번호가 생성이 되고
    pickRandomNum();
    resultAreaImg.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDY2cmtiamt6MGtpenRpbzRpb3doYmx0MGExZXVndmM1N2MwbmNvdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4ATNcOi0lbg1a/giphy.gif";
    gameClear = false;
    gameOver = false;
    if(level =='EASY')
    {
        resultAreaImg.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHBvM2F0Y3h5c3k1aXBiYWp5amxrYnBzaTdza25zMXIxZnpkeHUzNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5AoJQ2Mg732Ug/giphy.gif";
        chances = easychances;
    }
    else if(level =="NORMAL")
    {
        chances = normalchances;
    }
    else{
        resultAreaImg.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTAzYm5kaTI0aXdzNG9sMWJ0d2M3dTI5azVrb3FsbHhnZHdsNWUzNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zPbnEgxsPJOJSD3qfr/giphy.gif"
        chances = hardchances;
    }
    playButton.disabled = false;
    chanceArea.innerHTML = `남은 기회 : ${chances}번`;
    inputArea.innerHTML = `입력한 숫자 :`

    resultText.textContent = "1 ~ 100까지 숫자를 맞춰보세요."
}

function result(){
    resultText.textContent = computerNum
}
pickRandomNum();