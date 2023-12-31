// Generate variables that are updated after the game logic decided who won/lost
let playerScore = 0;
let computerScore = 0;
// DOM Selection for Web-Application
const container = document.querySelector("#container");
// Generate a text for each the AI, the Player and the current score
const scoreContainer = document.querySelector("#score");

const playerText = document.createElement("p");
const computerText = document.createElement("p");
const tieText = document.createElement("p");
const scoreText = document.createElement("p");

playerText.textContent = `Player: ${playerScore}`;
computerText.textContent = `AI: ${computerScore}`;
scoreText.textContent = '';

scoreContainer.appendChild(playerText);
scoreContainer.appendChild(computerText);
scoreContainer.appendChild(tieText);
scoreContainer.appendChild(scoreText);

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
        ? playerScore++
        : computerSelection === 2
        ? computerScore++
        : "Tie!";
    case "paper":
      return computerSelection === 0
        ? playerScore++
        : computerSelection === 2
        ? computerScore++
        : "Tie!";
    case "scissors":
      return computerSelection === 2
        ? playerScore++
        : computerSelection === 0
        ? computerScore++
        : "Tie!";
    default:
      return "Invalid input.";
  }
}

function updateScore() {
  playerText.textContent = `Player: ${playerScore}`;
  computerText.textContent = `AI: ${computerScore}`;
  // tieText.textContent = ''
  scoreText.textContent = '';
}

function checkGameEnd() {
  if(playerScore >= 5 || computerScore >= 5) {
    if(playerScore > computerScore) {
      scoreText.textContent = "You won against the AI 5 times! AI will never overtake us!"
    } else if(computerScore > playerScore) {
      scoreText.textContent = "AI is conspiring against us! You lost!"
    } else {
      scoreText.textContent = "Guess it's a tie. The world is even now. Ying and Yang."
    }
  }
}


const mainButtons = container.querySelectorAll("button");

mainButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const clickedButton = event.target;
    const buttonText = clickedButton.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    const roundResult = playRound(buttonText, computerChoice);
    // I want to check what button was clicked simply by checking the given HTML Text
    // Content, and if it matches the clicked Button.
    updateScore();
    // scoreText.textContent = roundResult;

    checkGameEnd();
  });
});
