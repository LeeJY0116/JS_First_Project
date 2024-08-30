const start = document.querySelector("#start");
const main = document.querySelector("#main");
const levelEasy = document.querySelector("#level-easy")
const levelNormal = document.querySelector("#level-normal")
const levelHard = document.querySelector("#level-hard")
let body = document.querySelector("#body")
let chances = 0;
let level = "";
easychances = 10;
normalchances = 5;
hardchances = 3;

function levelSelect(){
    setTimeout(() => {
        levelEasy.style.WebkitAnimation = "fadeIn 1s";
        levelEasy.style.animation = "fadeIn 1s";
        levelEasy.style.display = "block";
        setTimeout(() => {
            levelNormal.style.WebkitAnimation = "fadeIn 1s";
            levelNormal.style.animation = "fadeIn 1s";
            levelNormal.style.display = "block";
        setTimeout(() => {
            levelHard.style.WebkitAnimation = "fadeIn 1s";
            levelHard.style.animation = "fadeIn 1s";
            levelHard.style.display = "block";
    }, 450)
    }, 450)
    }, 450);
}

function easy(){
    chances=easychances;
    level = "EASY"
    begin();
}
function normal(){
    chances=normalchances;
    level = "NORMAL";
    begin();
}
function hard(){
    chances=hardchances;
    level = "HARD";
    begin();
}
function begin(){
    start.style.WebkitAnimation = "fadeOut 1s";
    start.style.animation = "fadeOut 1s";
    setTimeout(() => {
        main.style.WebkitAnimation = "fadeIn 1s";
        main.style.animation = "fadeIn 1s";
        setTimeout(() => {
            start.style.display = "none";
            main.style.display = "block";
            if(level =='EASY')
            {
                resultAreaImg.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHBvM2F0Y3h5c3k1aXBiYWp5amxrYnBzaTdza25zMXIxZnpkeHUzNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5AoJQ2Mg732Ug/giphy.gif";
                body.style.background = "url(image/digimon.webp)";
                body.style.backgroundSize = "cover";
            }
            else if(level =='NORMAL')
            {
                body.style.background = "url(image/cat.jpg)";
                body.style.backgroundSize = "cover";
                body.style.backgroundPosition = "center"; /* 이미지가 중앙에 배치되도록 조정 */
            }
            else
            {
                resultAreaImg.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTAzYm5kaTI0aXdzNG9sMWJ0d2M3dTI5azVrb3FsbHhnZHdsNWUzNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zPbnEgxsPJOJSD3qfr/giphy.gif"
                body.style.background = "url(image/devil.jpg)";
                body.style.backgroundSize = "cover";
            }
        }, 450)
    }, 450);
    levelArea.innerHTML = `난이도 : ${level}`;
    chanceArea.innerHTML = `남은 기회 : ${chances}번`;
}