
let result = "";
// localstorage only store in JSON then convert json to object use JSON.parse();
const score = JSON.parse(localStorage.getItem('score')) || { // if the localstorage return null then assign a default value through ||
    wins: 0,
    losses: 0,
    ties: 0
}; 

const processText = document.querySelector(".process");
const resultText = document.querySelector(".results");
const winsRate = document.querySelector(".winsrate");
const tiesRate = document.querySelector(".tiesrate");
const lossRate = document.querySelector(".lossrate");

function playerPerform(playerMove) {
    const computerMove = computerPerform();

    if (playerMove === "rock") {
        if (computerMove === "rock") {
            result = "Tie";
        } else if (computerMove === "paper") {
            result = "You loose";
        } else if (computerMove === "scissors") {
            result = "You win";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            result = "You win";
        } else if (computerMove === "paper") {
            result = "Tie";
        } else if (computerMove === "scissors") {
            result = "You loose";
        }
    } else {
        if (computerMove === "scissors") {
            result = "Tie";
        } else if (computerMove === "paper") {
            result = "You win";
        } else if (computerMove === "rock") {
            result = "You loose";
        }
    }

    if (result === "You win") {
        score.wins += 1;
        winsRate.innerText =`Wins: ${score.wins}`;
    } else if (result === "You loose") {
        score.losses += 1;
        lossRate.innerText =`Losses: ${score.losses}`;
    } else {
        score.ties += 1;
        tiesRate.innerText =`Ties: ${score.ties}`;
    }

    localStorage.setItem('score', JSON.stringify(score));

    const moves = document.getElementById("moves");
    moves.innerHTML=`<img src="./img/${playerMove}.png" alt=""
                    class="imgs"><img src="./img/${computerMove}.png" alt=""
                    class="imgs">`

    processText.innerText=`You move ${playerMove}. computer move ${computerMove}.`;
    resultText.innerText=`${result}`;

    
    // alert(`You move ${playerMove}. computer move ${computerMove}. result ${result} \n Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`);
}

function resetScores() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    processText.innerText=`You move ?. computer move ?`;
    resultText.innerText=`Result: ?`;
    winsRate.innerText =`Wins: ${score.wins}`;
    lossRate.innerText =`Losses: ${score.losses}`;
    tiesRate.innerText =`Ties: ${score.ties}`;
}



function computerPerform() {
    const randomNumber = Math.random();
    let computerMove = "";
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = "scissors";
    }
    return computerMove;
}