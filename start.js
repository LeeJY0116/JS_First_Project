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
                body.style.background = "url(image/digimon.webp)";
                body.style.backgroundSize = "cover";
            }
            else if(level =='NORMAL')
            {
                body.style.backgroundColor = "blue";
            }
            else
            {
                body.style.backgroundColor = "black";
            }
        }, 450)
    }, 450);
    levelArea.innerHTML = `난이도 : ${level}`;
    chanceArea.innerHTML = `남은 기회 : ${chances}번`;
}