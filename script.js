"use strict"

/* classes */
//opaque, opaquer, prev
//e.target.classList[1] === "rock" || e.target.alt === "rock"

const rps  = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll("[data-value]")
buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let playerChoice = e.target.classList[0];
        let computerChoice = computerPlay();
        changePreviousPicks(playerChoice, computerChoice);
        playRound(playerChoice, computerChoice);
    })
})

const message = document.querySelector(".msg");
const previousPlayer = document.querySelector(".previous-player");
const previousComputer = document.querySelector(".previous-computer");
const div = document.createElement("div");
const icon = document.createElement("img");

//Previous picks function
function changePreviousPicks(playerPick, computerPick) {
    let playerPicks = [];
    let computerPicks = [];

    if(checkPlayerPick()) {
        picksPlayer.pop();
    } else if(/*check if amount is 2*/X)
    {
        div.classList.add("opaquer");
    } else if(/*check if amount is 1*/X) {
        div.classList.add("opaque");
    }

    if(checkComputerPick()) {
        picksComputer.pop();
    } else {
        picksComputer.unshift(computerPick)
    }
}

//check for class
function checkOpacity(array) {
    const classes = ["opaque", "opaquer"];
    if(array.length) {
        if(classes.some(classItem => array[0].classList.contains(classItem))) {
            array[0].className = ""; 
        } else if(array[1].className !== "opaque") {
            array[1].className = "";
            array[1].classList.add("opaque");
        } else if(array[2].className !== "opaquer") {
            array[2].className = "";
            array[2].classList.add("opaquer");
        }
    }
    
}

//creating previous pick elements
function createPick(pick) {
    div.classList.add("prev");

}

//checking picks
function checkPlayerPick(prevPlayer = previousPlayer) {
    if(prevPlayer.childElementCount === 3) {
        return true;
    } return;
}

function checkComputerPick(prevComputer = previousComputer) {
    if(prevComputer.childElementCount === 3) {
        return true;
    } return;
}

//Computer play function
function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
}

//Play Round function
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let result = "";

    if(playerSelection === computerSelection) {
        result = `It's a draw!`;
    } else if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper"))  {
        result = `You won!`
    } else {
        result = `Computer won!`
    }
    message.innerText = result;
    return playerSelection;
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