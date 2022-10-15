let humanScore = 0;
let computerScore = 0;
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
    }
    else {
        return false;
    }

}
