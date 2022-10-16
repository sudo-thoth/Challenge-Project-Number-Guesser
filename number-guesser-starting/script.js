let humanScore = 9;
let computerScore = 2;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  // Purpose: Generate a random number between 0 and 9
  // Input: None
  // Output: A random number between 0 and 9
  return Math.floor(Math.random() * 9);
}

function compareGuesses(human, bot, target) {
  // Purpose: Compare the human and computer guesses to the target number
  // Input: Human guess, computer guess, and target number
  // Output: Boolean value indicating if human guess is closest to target
  let humanDiff = Math.abs(target - human);
  let botDiff = Math.abs(target - bot);
  if (humanDiff <= botDiff) {
    return true;
  } else {
    return false;
  }
}

function updateScoreV1(winner) {
  // Purpose: Update the score after each round
  // Input: String indicating the winner
  // Output: None
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  } 
}

function updateScore(winner) {
  // Purpose: Update the score after each round
  // Input: String indicating the winner
  // Output: None
  switch (winner.toLowerCase()) {
    case "human":
      humanScore++;
      break;
    case "computer":
      computerScore++;
      break;
    default:
        console.log("Invalid winner");
  }
}


function advanceRound() {
  // Purpose: Advance to the next round {be used to update the round number after each round}
  // UPDATE: currentRoundNumber = currentRoundNumber + 1;
  currentRoundNumber++;
}
