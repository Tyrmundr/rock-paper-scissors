"use strict"

/* classes */
//opaque, opaquer, prev
//e.target.classList[1] === "rock" || e.target.alt === "rock"

/*-----------------------------------------*/
/*~~~~~ GLOBAL VARIABLES ~~~~~*/
/*-----------------------------------------*/

const rps  = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let currentRound = 1;

/*-----------------------------------------*/
/*~~~~~ DOM ELEMENTS ~~~~~*/
/*-----------------------------------------*/

const buttons = document.querySelectorAll("[data-value]");
const reloadBtn = document.getElementById("reload");

const message = document.querySelector(".msg");
const previousPlayer = document.querySelector(".previous-player");
const previousComputer = document.querySelector(".previous-computer");
const playerHuman = document.querySelector(".player-human");
const playerComputer = document.querySelector(".player-computer");

const div = document.createElement("div");
const icon = document.createElement("img");

/*-----------------------------------------*/
/*~~~~~ GAME LOGIC ~~~~~*/
/*-----------------------------------------*/

function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
};

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    message.innerText = getWinner(playerSelection, computerSelection);
    incrementScore(getWinner(playerSelection, computerSelection));
};

function incrementScore(score) {
    if(score === "You won!") {
        playerScore++;
    } else if(score === "Computer won!") {
        computerScore++;
    }
};

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
};

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
};

function rmvEvLis() {
    buttons.forEach(btn => {
        btn.removeEventListener("click", game);
    });
};

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
};

/*-----------------------------------------*/
/*~~~~~ UI MANIPULATION ~~~~~*/
/*-----------------------------------------*/

function checkLength(nodelist) {
    return nodelist.childElementCount;
};

function removeLastChild(nodelist) {
    return nodelist.removeChild(nodelist.lastElementChild);
};

function createPick(nodelist) {
    
}

function changeClasses(array) {
    array.forEach(item => {
        item.classList = "";
        if(array.indexOf(item) === 0) {
            item.classList.add("prev");
        } else if (array.indexOf(item) === 1) {
            item.classList = "prev opaque";
            item.childNodes[0].classList = "opaque";
        } else if (array.indexOf(item) === 2) {
            item.classList = "prev opaquer";
            item.childNodes[0].classList = "opaquer";
        }
    })
}


function getClassLists(nodelist) {
    let newArr = Array.from(nodelist.childNodes);
    let filtered = newArr.filter(item => item.classList);
    
    changeClasses(filtered)
}

function updateScores() {
    playerHuman.innerText = `PLAYER - ${playerScore}`;
    playerComputer.innerText = `${computerScore} - COMPUTER`
};

function resetUI() {
    playerScore = 0;
    computerScore = 0;
    currentRound = 0;
    message.innerText = `Well, are you gonna choose or what?!`;
    updateScores();
};

/*-----------------------------------------*/
/*~~~~~ EVENT LISTENERS ~~~~~*/
/*-----------------------------------------*/

buttons.forEach(btn => {
    btn.addEventListener("click", game)
});

reloadBtn.addEventListener("click", () => {
    buttons.forEach(btn => {
        btn.addEventListener("click", game)
    });
    resetUI();
});