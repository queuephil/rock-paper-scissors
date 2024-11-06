let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;

let result;

function getComputerChoice() {
    let random = Math.random();
    computerChoice = 
        (random < 1/3) ? "rock" :
        (random < 2/3) ? "paper" :
        "scissors";
    // console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    // humanChoice = window.prompt("whats your choice: rock / paper / scissors?");
    // humanChoice = playerSelection;
    // console.log(humanChoice);
    return humanChoice;
}

function playRound() {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    if(computerChoice == humanChoice) {
        // console.log("draw");
        divRound.textContent = "Draw! " + computerChoice + " vs. " + humanChoice;
    }
    else if(
        ((computerChoice == "rock") && (humanChoice == "paper")) || 
        ((computerChoice == "paper") && (humanChoice == "scissors")) || 
        ((computerChoice == "scissors") && (humanChoice == "rock"))) {
        // console.log("You won! " + computerChoice + " vs. " + humanChoice);
        divRound.textContent = "You won! " + computerChoice + " vs. " + humanChoice;
        humanScore++;
    }
    else {
        // console.log("You lost! " + computerChoice + " vs. " + humanChoice);
        divRound.textContent = "You lost! " + computerChoice + " vs. " + humanChoice;
        computerScore++;
    }

    divBody.appendChild(divRound);
    // console.log("Computer: " + computerScore + " / You: " + humanScore);
    divTotal.textContent = "Computer: " + computerScore + " / You: " + humanScore;
    divBody.appendChild(divTotal);
}
// for(let score = Math.max(computerScore, humanScore); 
//     score < 3; score = Math.max(computerScore, humanScore)) {
//     playRound();
// }

// Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked.
const divBody = document.querySelector("body");

const buttonRock = document.createElement("button");
buttonRock.textContent = "rock";
divBody.appendChild(buttonRock); 

const buttonPaper = document.createElement("button");
buttonPaper.textContent = "paper";
divBody.appendChild(buttonPaper);

const buttonScissors = document.createElement("button");
buttonScissors.textContent = "scissors";
divBody.appendChild(buttonScissors);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.textContent;
        let score = Math.max(computerScore, humanScore); 
        if(score < 5) {
            playRound();
        }else{
            divWin.textContent = "game finished, reload to play again";
            divBody.appendChild(divWin)   
        }
    })
})
// Add a div for displaying results and change all of your console.logs into DOM methods.
const divRound = document.createElement("div");
const divTotal = document.createElement("div");
const divWin = document.createElement("div");
