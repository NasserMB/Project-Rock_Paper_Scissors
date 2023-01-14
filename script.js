// Declerations


// getComputerChoice function return one of three values,
// Rock, Paper or Scissors.

function getComputerChoice () {
    let randomNum = parseInt(Math.floor(Math.random() * 300));
    let result = (randomNum < 100) ? 'Rock' :
        (randomNum < 200) ? 'Paper': 'Scissors';

    console.log(result);
}

getComputerChoice();