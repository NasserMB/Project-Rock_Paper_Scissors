// Declerations

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerPoints = document.getElementsByClassName('playerScore');
const computerPoints = document.getElementsByClassName('computerScore');
const gameStatus = document.getElementsByClassName('gameStatus');

let playerSelection;
let computerSelection;
let totalPlayerScore = 0;
let totalComputerScore = 0;

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

function playRound (playerSelection) {
    let roundResult = "it's a Draw!";
    let playerScore = 0;
    let computerScore = 0;

    if (totalComputerScore == 5 || totalPlayerScore == 5) {
        totalComputerScore = 0;
        totalPlayerScore = 0;
    }

    computerSelection = getComputerChoice();

    
    // Player chooses Rock.
    if (playerSelection.toUpperCase() === 'ROCK') {
        if (computerSelection === 'SCISSORS') {
            roundResult = 'You win! Rock beats Scissors';
            playerScore = 1;
        } else if (computerSelection === 'PAPER') {
            roundResult = 'You lose! Paper beats Rock';
            computerScore = 1; 
        }
    };

    // Player chooses Paper.
    if (playerSelection.toUpperCase() === 'PAPER') {
        if (computerSelection === 'ROCK') {
            roundResult = 'You win! Paper beats Rock';
            playerScore = 1;
        } else if (computerSelection === 'SCISSORS') {
            roundResult = 'You lose! Scissors beats Paper';
            computerScore = 1;
        }
    };

    // Plaer chooses Scissors.
    if (playerSelection.toUpperCase() === 'SCISSORS') {
        if (computerSelection === 'PAPER') {
            roundResult = 'You win! Scissors beats paper';
            playerScore = 1;
        } else if (computerSelection === 'ROCK') {
            roundResult = 'You lose! Rock beats Scissors';
            computerScore = 1;
        }
    };

    totalPlayerScore += playerScore;
    totalComputerScore += computerScore;

    if (totalPlayerScore == 5) roundResult = 'YOU WIN!!!';
    if (totalComputerScore == 5) roundResult = 'computer wins...try again';

    playerPoints[0].textContent = totalPlayerScore;
    computerPoints[0].textContent = totalComputerScore;
    gameStatus[0].textContent = roundResult;
    console.log(roundResult);
    console.log(playerScore);
    return playerScore;
}

rock.addEventListener('click', (e) => {
    console.log(rock.id);
    playRound(rock.id);
});

paper.addEventListener('click', (e) => {
    console.log(paper.id);
    playRound(paper.id);
});

scissors.addEventListener('click', (e) => {
    console.log(scissors.id);
    playRound(scissors.id);
});