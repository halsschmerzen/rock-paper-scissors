function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  //   I know this is a weird representation but:
  //   RANDOM NUMBERS STAND FOR:

  //   ROCK = 0
  //   SCISSORS = 1
  //   PAPER = 2

  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  switch (playerSelection) {
    case "rock":
      return computerSelection === 1
        ? "You win! Rock beats Scissors!"
        : computerSelection === 2
        ? "You lose! Rock loses against Paper!"
        : "Tie :§ - Rock vs Rock";
    case "paper":
      return computerSelection === 0
        ? "You win! Paper beats Rock!"
        : computerSelection === 2
        ? "You lose! Paper loses against Scissors!"
        : "Tie :( - Paper vs Paper";
    case "scissors":
      return computerSelection === 2
        ? "You win! Scissors beats Paper!"
        : computerSelection === 0
        ? "You lose! Scissors loses against Rock!"
        : "Tie D: - Scissors vs Scissors";
    default:
      return "Invalid input.";
  }
}

// const computerSelection = getComputerChoice();

// const playerSelection = prompt("Enter your choice: Rock - Paper - Scissors");

function game() {
//  const computerSelection = getComputerChoice();
    // Removed initialization of the game for preparation of Web-Based Application
}

game()

