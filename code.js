let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;

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
    humanChoice = window.prompt("whats your choice: rock / paper / scissors?");
    // console.log(humanChoice);
    return humanChoice;
}

function playRound() {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    if(computerChoice == humanChoice) {
        console.log("draw");
    }
    else if(
        ((computerChoice == "rock") && (humanChoice == "paper")) || 
        ((computerChoice == "paper") && (humanChoice == "scissors")) || 
        ((computerChoice == "scissors") && (humanChoice == "rock"))) {
        console.log("You won! " + computerChoice + " vs. " + humanChoice);
        humanScore++;
    }
    else {
        console.log("You lost! " + computerChoice + " vs. " + humanChoice);
        computerScore++;
    }

    console.log("Computer: " + computerScore + " / You: " + humanScore);
}

for(let score = Math.max(computerScore, humanScore); score < 3; score = Math.max(computerScore, humanScore)) {
    playRound();
}
