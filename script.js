// Declerations

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

// getComputerChoice function return one of three values,
// Rock, Paper or Scissors.

function getComputerChoice () {
    let randomNum = parseInt(Math.floor(Math.random() * 300));
    let result = (randomNum < 100) ? 'ROCK' :
        (randomNum < 200) ? 'PAPER': 'SCISSORS';

    return result;
}

// playRound takes in playerSelection and computerSelection and
// compares between the two to identify the winner.

function playRound (playerSelection, computerSelection) {
    let roundResult = "it's a Draw!";

    // Player chooses Rock.
    if (playerSelection.toUpperCase() === 'ROCK') {
        if (computerSelection === 'SCISSORS') {
            roundResult = 'You win! Rock beats Scissors';
        } else if (computerSelection === 'PAPER') {
            roundResult = 'You lose! Paper beats Rock';
        }
    };

    // Player chooses Paper.
    if (playerSelection.toUpperCase() === 'PAPER') {
        if (computerSelection === 'ROCK') {
            roundResult = 'You win! Paper beats Rock';
        } else if (computerSelection === 'SCISSORS') {
            roundResult = 'You lose! Scissors beats Paper';
        }
    };

    // Plaer chooses Scissors.
    if (playerSelection.toUpperCase() === 'SCISSORS') {
        if (computerSelection === 'PAPER') {
            roundResult = 'You win! Scissors beats paper';
        } else if (computerSelection === 'ROCK') {
            roundResult = 'You lose! Rock beats Scissors';
        }
    };

    return roundResult;
}

console.log(playRound(playerSelection,computerSelection));