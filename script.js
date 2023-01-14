// Declerations

let playerSelection;
let computerSelection;

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

function playRound () {
    let roundResult = "it's a Draw!";
    let playerScore = 0;

    playerSelection = prompt('Choose your play!');
    computerSelection = getComputerChoice();

    // Player chooses Rock.
    if (playerSelection.toUpperCase() === 'ROCK') {
        if (computerSelection === 'SCISSORS') {
            roundResult = 'You win! Rock beats Scissors';
            playerScore = 1;
        } else if (computerSelection === 'PAPER') {
            roundResult = 'You lose! Paper beats Rock';
            playerScore = -1; 
        }
    };

    // Player chooses Paper.
    if (playerSelection.toUpperCase() === 'PAPER') {
        if (computerSelection === 'ROCK') {
            roundResult = 'You win! Paper beats Rock';
            playerScore = 1;
        } else if (computerSelection === 'SCISSORS') {
            roundResult = 'You lose! Scissors beats Paper';
            playerScore = -1;
        }
    };

    // Plaer chooses Scissors.
    if (playerSelection.toUpperCase() === 'SCISSORS') {
        if (computerSelection === 'PAPER') {
            roundResult = 'You win! Scissors beats paper';
            playerScore = 1;
        } else if (computerSelection === 'ROCK') {
            roundResult = 'You lose! Rock beats Scissors';
            playerScore = -1;
        }
    };

    console.log(roundResult);
    console.log(playerScore);
    return playerScore;
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    let endResults;

    for (i = 0 ; i < 5 ; i++) {
        endResults = playRound();

        if (endResults > 0) {
            playerPoints++
        } else if (endResults < 0) {
            computerPoints++
        }
    };

    return 'Final score, you got ' + playerPoints + ' Vs ' + computerPoints;
}

console.log(game());