let computerScore = 0
let humanScore = 0;

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
    console.log("You lost the round... it's time to lock in!");
  } else if (outcome == 2) {
    humanScore += 1;
    console.log("You won the round! Hooray!");
  } else {
    console.log("You tied the round. -_-");
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

  if (computerScore > humanScore) {
    console.log("End result: You lose... * womp womp *");
  } else if (computerScore < humanScore) {
    console.log("End result: You win! Good jorbius.");
  } else {
    console.log("End result: You tie. Rematch!");
  }
  console.log(`You won ${humanScore} games while the computer won ${computerScore} games`);
}

playGame()