console.log("Welcome to Rock Paper Scissors!");

// Math.random() returns a decimal between 0 (inclusive) and 1 (exclusive).
// Math.random() * 3 gives you 0 to 2.999...
// Math.floor() rounds down, so you get 0, 1, or 2
// Adding 1 gives you 1, 2, or 3

let humanScore = 0;
let computerScore = 0;
let numRounds = 5;

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  return randomNum === 1 ? "rock" : randomNum === 2 ? "paper" : "scissors";
}

function getPlayerChoice() {
  const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    console.log("Invalid choice, please try again.");
    return getPlayerChoice();
  }
}

function playRound(playerSelection, computerSelection, roundNumber) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    return `Human wins round ${roundNumber}!!! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `Computer wins round ${roundNumber}!!! ${computerSelection} beats ${playerSelection}.`;
  }
}

for (let round = 1; round <= numRounds; round++) {
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();
  console.log("Player Choice:", playerSelection);
  console.log("Computer Choice:", computerSelection);
  console.log(playRound(playerSelection, computerSelection, round));
}

if (humanScore > computerScore) {
  alert(
    `🎉 Human wins the game! 🎉\nFinal Score - Human: ${humanScore}, Computer: ${computerScore}`
  );
} else if (computerScore > humanScore) {
  alert(
    `🤖 Computer wins the game! 🤖\nFinal Score - Computer: ${computerScore}, Human: ${humanScore}`
  );
} else {
  alert(
    `🤝 The game is a tie! 🤝\nFinal Score - Human: ${humanScore}, Computer: ${computerScore}`
  );
}
