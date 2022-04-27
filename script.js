"use strict"

/* classes */
//opaque, opaquer, prev
//e.target.classList[1] === "rock" || e.target.alt === "rock"

const rps  = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll("[data-value]")
buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let playerChoice = e.target.classList[0];
        playRound(playerChoice)
    })
})

const message = document.querySelector(".msg");

//Computer play function
function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
}

//Play Round function
function playRound(playerSelection, computerSelection = computerPlay()) {
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