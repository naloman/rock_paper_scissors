function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'It is a tie';
    }
    elseif (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'Computer Wins';
    } elseif (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'Player Wins';
    } elseif (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'Computer Wins';
    } elseif (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'Player Wins';
    } elseif (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'Player Wins';
    } else {
        return 'Computer Wins';
    }
}

function computerPlay () {
    let result = math.round(math.random()*3)
    if (result = 1) {
        return 'rock';
    } elseif (result = 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
let playerSelection = 'rock';
let computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));