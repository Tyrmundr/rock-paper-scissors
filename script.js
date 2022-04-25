"use strict"

//Global Array for choices
const rps  = ["rock", "paper", "scissors"];

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
        return result = `It's a DRAW! Both choices are: ${playerSelection}`;
    } else if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper"))  {
        return result = `Player WINS, Computer LOSES: ${playerSelection} beats ${computerSelection}`
    } else {
        return result = `Computer WINS, Player LOSES: ${computerSelection} beats ${playerSelection}`
    }
}

//5 round Game function
function game() {
    /* for later use, when implementing score-keeping and final results */
    //let playerScore = 0;
    //let computerScore = 0;
    //let result = "The game is finished!";
    

    //loop so the game is only going for 5 rounds
    for(let i = 0; i < 5; i++) {
        console.log(playRound(prompt("Rock, Paper or Scissors?"), computerPlay()))
    }
    
}

//calling the game
game()