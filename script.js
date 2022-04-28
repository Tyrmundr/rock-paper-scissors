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
    btn.addEventListener("click", (e) => {
        let playerChoice = e.target.classList[0];
        let computerChoice = computerPlay();
        //function to change previous picks container
        playRound(playerChoice, computerChoice);
        updateScores();
    })
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
function incrementScores(winner) {
    
}

//update scores
function updateScores() {
    playerHuman.innerText = `PLAYER - ${playerScore}`;
    playerComputer.innerText = `${computerScore} - COMPUTER`
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

//5 round Game function
function game() {
    /* for later use, when implementing score-keeping and final results */
    //let playerScore = 0;
    //let computerScore = 0;
    //let result = "The game is finished!";
    

    /* no need for now
    //loop so the game is only going for 5 rounds
    for(let i = 0; i < 5; i++) {
        console.log(playRound(prompt("Rock, Paper or Scissors?"), computerPlay()))
    }
    */
    
}

game()