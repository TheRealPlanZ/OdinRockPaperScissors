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

// Step 5: Function to play a round

// Step 6: Function to play entire game