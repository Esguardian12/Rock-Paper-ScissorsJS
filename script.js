// Testing the connection to the HTML file
console.log(`Hello World`);

// Step 1: Define the main game function
function playGame() {
    // Step 2: Declare the score variables inside the playGame scope
    let humanScore = 0;
    let computerScore = 0;
    
// Step 3: Logic to get the computer choice (No arrays used)
function getComputerChoice() {
    const randomValue = Math.random();

    if(randomValue < 0.33) {
        return `rock`;
    } else if (randomValue < 0.66) {
        return `paper`;
    } else {
        return `scissors`;
    }
}

// Step 4: Logic to get humanChoice using prompt()
function getHumanChoice(){
    let choice = prompt(`Enter rock, paper, or scissors: `);
    return choice;
}

// Step 5: Logic to play a single round
function playRound(humanChoice, computerChoice) {
    // Make the human input case-insensitive and safe
    if(!humanChoice) return;
    const human = humanChoice.toLowerCase();
    const computer = computerChoice;

    // Check if tie
    if (human === computer) {
        console.log(`It's a tie! Both chose ${human}.`);
        return;
    }

    // Check for human win conditions
    if (
        (human === `rock` && computer === `scissors`) ||
        (human === `paper` && computer === `rock`) ||
        (human === `scissors` && computer === `paper`)
    ) {
        console.log(`You Win! ${human} beats ${computer}.`);
        humanScore++; // Increment human score
    } else {
        // If it's not a tie and human didn't win, computer wins
        console.log(`You lose! ${computer} beats ${human}.`);
        computerScore++; // Increment computer score
    }
}

    // Play 5 rounds sequentially by gathering choices and executing playRound
    console.log(`--- Round 1 ---`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score -> You : ${humanScore} | Computer: ${computerScore}`);

    console.log("--- Round 2 ---");
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);

    console.log("--- Round 3 ---");
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);

    console.log("--- Round 4 ---");
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);

    console.log("--- Round 5 ---");
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);

    // Declare the final winner after 5 rounds
    console.log(`=== FINAL RESULT ===`);
    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game! Final Score: ${humanScore}-${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Game Over! The computer won. Final Score: ${computerScore}-${humanScore}`);
    } else {
        console.log(`The entire game ended in a tie! Final Score: ${humanScore}-${computerScore}`);
    }

}

// Start the game!
playGame();