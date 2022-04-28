"use strict"

/* classes */
//opaque, opaquer, prev
//e.target.classList[1] === "rock" || e.target.alt === "rock"

const rps  = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let currentRound = 1;

const buttons = document.querySelectorAll("[data-value]")
buttons.forEach(btn => {
    btn.addEventListener("click", game)
})

const reloadBtn = document.getElementById("reload");
reloadBtn.addEventListener("click", () => {
    buttons.forEach(btn => {
        btn.addEventListener("click", game)
    });
    resetUI();
})

const message = document.querySelector(".msg");
const previousPlayer = document.querySelector(".previous-player");
const previousComputer = document.querySelector(".previous-computer");

const playerHuman = document.querySelector(".player-human");
const playerComputer = document.querySelector(".player-computer")

const div = document.createElement("div");
const icon = document.createElement("img");

//NEED:
//check length of nodelist
function checkLength(nodelist) {
    return nodelist.childElementCount;
}

//remove last childElement
function removeLastChild(nodelist) {
    return nodelist.removeChild(nodelist.lastElementChild);
}

//scores function

//update scores
function updateScores() {
    playerHuman.innerText = `PLAYER - ${playerScore}`;
    playerComputer.innerText = `${computerScore} - COMPUTER`
}

//reset UI
function resetUI() {
    playerScore = 0;
    computerScore = 0;
    currentRound = 0;
    message.innerText = `Well, are you gonna choose or what?!`;
    updateScores();
}

//Computer play function
function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
}

//Play Round function
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    message.innerText = getWinner(playerSelection, computerSelection);
    incrementScore(getWinner(playerSelection, computerSelection));
    
}

function incrementScore(score) {
    if(score === "You won!") {
        playerScore++;
    } else if(score === "Computer won!") {
        computerScore++;
    }
}

function checkWinner() {
    let msg = "";
    
    if(playerScore > computerScore) {
        msg = `Player has won the game!`
    } else if (computerScore > playerScore) {
        msg = `Computer has won the game!`
    } else {
        msg = `Nobody won!`
    }
    message.innerText = msg;
    rmvEvLis();
}


function getWinner(p, c) {
    let result = "";
    if(p === c) {
        result = `It's a draw!`;
    } else if((p === "rock" && c === "scissors") || (p === "paper" && c === "rock") || (p === "scissors" && c === "paper"))  {
        result = `You won!`;
    } else {
        result = `Computer won!`;
    }
    return result;
}

//remove event listener
function rmvEvLis() {
    buttons.forEach(btn => {
        btn.removeEventListener("click", game);
    });
}

//5 round Game function
function game(e) {
    console.log(currentRound)
    if(currentRound === 5) {
        checkWinner();
        return;
    }
    ++currentRound;
    let playerChoice = e.target.classList[0];
    let computerChoice = computerPlay();
    //function to change previous picks container
    playRound(playerChoice, computerChoice);
    updateScores();
}

//game()