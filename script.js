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

    incrementScore(message.innerText);

    removeLastChild(previousPlayer);
    removeLastChild(previousComputer);

    if(message.innerText === "It's a draw!" || message.innerText === "Nobody won!") {
        createPick(previousPlayer, playerSelection);
        createPick(previousComputer, computerSelection);
    } else if(message.innerText === "You won!" || message.innerText === "Player has won the game!") {
        createPick(previousPlayer, playerSelection);
        createPick(previousComputer, computerSelection);
    } else if(message.innerText === "Computer won!" || message.innerText === "Computer has won the game!"){
        createPick(previousComputer, computerSelection);
        createPick(previousPlayer, playerSelection);
    }

    getClassLists(previousPlayer);
    getClassLists(previousComputer);
    
};

function incrementScore(msg) {
    if(msg === "You won!") {
        playerScore++;
    } else if(msg === "Computer won!") {
        computerScore++;
    }
};

function checkWinner() {
    let msg = "";
    
    if(currentRound === 5) {
        if(playerScore > computerScore) {
            msg = `Player has won the game!`
        } else if (computerScore > playerScore) {
            msg = `Computer has won the game!`
        } else {
            msg = `Nobody won!`
        }
        message.innerText = msg;
        rmvEvLis();
    } return;
    
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
    let playerChoice = e.target.classList[0];
    let computerChoice = computerPlay();
    
    //function to change previous picks container
    playRound(playerChoice, computerChoice);
    checkWinner();
    currentRound++;
    updateScores();
};

/*-----------------------------------------*/
/*~~~~~ UI MANIPULATION ~~~~~*/
/*-----------------------------------------*/

function resetPicks(nodelist) {
    let i = nodelist.childElementCount;
    while(i) {
        nodelist.removeChild(nodelist.lastElementChild);
        i--
    }
}

function checkLength(nodelist) {
    return nodelist.childElementCount;
};

function removeLastChild(nodelist) {
    if(checkLength(nodelist) === 3) {
        nodelist.removeChild(nodelist.lastElementChild);
    }
};

function createPick(nodelist,result) {
    const div = document.createElement("div");
    const icon = document.createElement("img");

    div.classList.add("prev");
    icon.setAttribute("src", `./icons/${result}.svg`);
    icon.setAttribute("alt", `${result}`);
    div.appendChild(icon);
    nodelist.insertBefore(div, nodelist.firstElementChild);
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
    currentRound = 1;

    resetPicks(previousPlayer);
    resetPicks(previousComputer);
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
    resetUI();
    buttons.forEach(btn => {
        btn.addEventListener("click", game)
    });
    
});