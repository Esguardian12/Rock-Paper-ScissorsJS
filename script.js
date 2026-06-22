// // Testing the connection to the HTML file
// console.log(`Hello World`);

// // Step 1: Define the main game function
// function playGame() {
//     // Step 2: Declare the score variables inside the playGame scope
//     let humanScore = 0;
//     let computerScore = 0;
    
// // Step 3: Logic to get the computer choice (No arrays used)
// function getComputerChoice() {
//     const randomValue = Math.random();

//     if(randomValue < 0.33) {
//         return `rock`;
//     } else if (randomValue < 0.66) {
//         return `paper`;
//     } else {
//         return `scissors`;
//     }
// }

// // Step 4: Logic to get humanChoice using prompt()
// function getHumanChoice(){
//     let choice = prompt(`Enter rock, paper, or scissors: `);
//     return choice;
// }

// // Step 5: Logic to play a single round
// function playRound(humanChoice, computerChoice) {
//     // Make the human input case-insensitive and safe
//     if(!humanChoice) return;
//     const human = humanChoice.toLowerCase();
//     const computer = computerChoice;

//     // Check if tie
//     if (human === computer) {
//         console.log(`It's a tie! Both chose ${human}.`);
//         return;
//     }

//     // Check for human win conditions
//     if (
//         (human === `rock` && computer === `scissors`) ||
//         (human === `paper` && computer === `rock`) ||
//         (human === `scissors` && computer === `paper`)
//     ) {
//         console.log(`You Win! ${human} beats ${computer}.`);
//         humanScore++; // Increment human score
//     } else {
//         // If it's not a tie and human didn't win, computer wins
//         console.log(`You lose! ${computer} beats ${human}.`);
//         computerScore++; // Increment computer score
//     }
// }

//     // Play 5 rounds sequentially by gathering choices and executing playRound
//     console.log(`--- Round 1 ---`);
//     playRound(getHumanChoice(), getComputerChoice());
//     console.log(`Score -> You : ${humanScore} | Computer: ${computerScore}`);

//     console.log("--- Round 2 ---");
//     playRound(getHumanChoice(), getComputerChoice());
//     console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);

//     console.log("--- Round 3 ---");
//     playRound(getHumanChoice(), getComputerChoice());
//     console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);

//     console.log("--- Round 4 ---");
//     playRound(getHumanChoice(), getComputerChoice());
//     console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);

//     console.log("--- Round 5 ---");
//     playRound(getHumanChoice(), getComputerChoice());
//     console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);

//     // Declare the final winner after 5 rounds
//     console.log(`=== FINAL RESULT ===`);
//     if (humanScore > computerScore) {
//         console.log(`Congratulations! You won the game! Final Score: ${humanScore}-${computerScore}`);
//     } else if (computerScore > humanScore) {
//         console.log(`Game Over! The computer won. Final Score: ${computerScore}-${humanScore}`);
//     } else {
//         console.log(`The entire game ended in a tie! Final Score: ${humanScore}-${computerScore}`);
//     }

// }

// // Start the game!
// playGame();

// State variables to keep track of running scores
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

// DOM Elements caching
const roundOutcomeDiv = document.getElementById("round-outcome");
const scoreBoardDiv = document.getElementById("score-board");
const finalResultDiv = document.getElementById("final-result");

// Step 2: Random computer selection logic
function getComputerChoice() {
    const randomValue = Math.random();
    if (randomValue < 0.33) return "rock";
    if (randomValue < 0.66) return "paper";
    return "scissors";
}

// Step 5: Refactored Single Round Logic using DOM updates instead of console.log
function playRound(humanChoice) {
    if (gameOver) return; // Disables input if the game is already finished

    const computerChoice = getComputerChoice();
    let outcomeMessage = "";

    // Determine standard conditions
    if (humanChoice === computerChoice) {
        outcomeMessage = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        outcomeMessage = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        outcomeMessage = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    }

    // Render results instantly to UI text areas
    roundOutcomeDiv.textContent = outcomeMessage;
    scoreBoardDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

    // Evaluate win parameters to flag final match completion at 5 points
    checkGameWinner();
}

// Evaluate running point limits
function checkGameWinner() {
    if (humanScore === 5) {
        finalResultDiv.textContent = "🎉 Congratulations! You reached 5 points and won the game!";
        gameOver = true;
        disableButtons();
    } else if (computerScore === 5) {
        finalResultDiv.textContent = "🤖 Game Over! The Computer reached 5 points and won.";
        gameOver = true;
        disableButtons();
    }
}

// Visual layout safety rule to block inputs post match finish
function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

// Event Listeners linking button triggers to execution scopes
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
