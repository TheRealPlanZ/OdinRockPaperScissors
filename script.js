// Step 2: Function to get computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper','scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Step 3: Function to get human's choice
function getHumanChoice() {
    let choice;
    do {
      choice = prompt('Enter your choice (rock, paper, or scissors): ');
    } while (!['rock', 'paper','scissors'].includes(choice.toLowerCase()));
    return choice.toLowerCase();
}

// Step 4: Declare score variables
let humanScore = 0;
let computerScore = 0;

// Step 5: Function to play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }
  
  // Step 6: Function to play the entire game
  function playGame() {
    humanScore = 0;
    computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    }
  
    if (humanScore > computerScore) {
      console.log(`You win the game! Final score: ${humanScore}-${computerScore}`);
    } else if (humanScore < computerScore) {
      console.log(`You lose the game! Final score: ${computerScore}-${humanScore}`);
    } else {
      console.log(`The game is a tie! Final score: ${humanScore}-${computerScore}`);
    }
  }
  
  // Start the game
  playGame();