//storing variables
const boxs = document.querySelectorAll(".box");
const statusText = document.querySelector("#status");
const btnRestart = document.querySelector("#restart");

//celebrate
let celebrate = document.querySelector("#my-canvas");
//image variable
let x = "X";
let o = "O";

//possibility of wins by matrix method
const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//9 moves starting at empty
let options = ["", "", "", "", "", "", "", "", ""];
let currenPlayer = x;
let player = "x";
let running = false;

init();

function init(){
    boxs.forEach(box=>box.addEventListener("click", boxClick));
    btnRestart.addEventListener("click", restartGame);
    statusText.textContent = player +" Your Turn";
    running = true;
}

function boxClick(){
    const index = this.dataset.index;
    if(options[index]!="" || !running)
        return;
    updateBox(this, index);
    checkWinner();
}

function updateBox(box, index){
    options[index] = player;
    box.innerHTML = currenPlayer;
}

function checkWinner(){
    let isWon = false;
    for(let i=0; i<win.length; i++){
        const condition = win[i];
        const box1 = options[condition[0]];
        const box2 = options[condition[1]];
        const box3 = options[condition[2]];

        if(box1 == "" || box2 == "" || box3 == "")
            continue;
        
        if(box1 == box2 && box2 == box3){
            isWon = true;
            boxs[condition[0]].classList.add("win");
            boxs[condition[1]].classList.add("win");
            boxs[condition[2]].classList.add("win");
        }
    }
    if(isWon){
        statusText.textContent = player +" Won..";
        celebrate.classList.add("active");
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = "Game Draw..!";
        running = false;
    }
    else
        changePlayer();
}

function changePlayer(){
    player = (player === "x") ? "o" : "x";
    currenPlayer = (currenPlayer === x) ? o : x;
    statusText.textContent = player+" Your Turn";
}

function restartGame(){
    options = ["", "", "", "", "", "", "", "", ""];
    currenPlayer = x;
    player = "x";
    running = true;
    statusText.textContent = player+" Your Turn";

    boxs.forEach(box=>{
        box.innerHTML = "";
        box.classList.remove("win");
    });

    celebrate.classList.remove("active");
}

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();