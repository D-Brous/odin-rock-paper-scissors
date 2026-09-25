let computerScore, humanScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1/3) {
    return "rock";
  } else if (randomNumber < 2/3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return window.prompt("Enter \"rock\", \"paper\", or \"scissors\": ");
}

function playRound(computerChoice, humanChoice) {
  humanChoice = humanChoice.toLowerCase();
  let outcome = 0;
  if (computerChoice == humanChoice) {
    outcome = 1;
  } else if (
    (computerChoice == "rock" && humanChoice == "paper") ||
    (computerChoice == "paper" && humanChoice == "scissors") ||
    (computerChoice == "scissors" && humanChoice == "rock")
  ) {
    outcome = 2;
  }
  
  if (outcome == 0) {
    computerScore += 1;
    console.log("You lost... * womp womp *");
  } else if (outcome == 2) {
    humanScore += 1;
    console.log("You won! Hooray!");
  } else {
    console.log("You tied. -_-");
  }
  console.log(`Your chose ${humanChoice} while the computer chose ${computerChoice}.\n`)
}

function playGame() {
  for (let round = 1; round <= 5; round++) {
    console.log(`Starting Round ${round}:`)
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    playRound(computerSelection, humanSelection);
  }
}

playGame()