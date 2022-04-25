"use strict"

//Global Array for choices
const rps  = ["rock", "paper", "scissors"];

//Computer play function
function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
}

//Play Round function
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
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

