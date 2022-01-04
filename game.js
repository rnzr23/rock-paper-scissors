let playerScore = 0;
let computerScore = 0;
let rounds = 0;

// Choose randomly the computer play

function computerPlay() {
    let elements = ['Rock', 'Paper', 'Scissors'];

    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    return randomElement;
}

// Plays a single round of the game

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        document.getElementById('message').textContent = "It's a draw!";
    }
    else if((playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER') || 
    (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS') ||
    (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK')){

        computerScore++;
        document.getElementById('message').textContent = "You Lose! "  + computerSelection + " beats " +  playerSelection[0].toUpperCase() + playerSelection.slice(1);
    } else {
        playerScore++;
        document.getElementById('message').textContent = "You Win! " + playerSelection[0].toUpperCase() + playerSelection.slice(1)+ " beats " + computerSelection ;
    }

}

function updateScore(playerSelection,computerSelection){
    document.getElementById('pSelection').textContent = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    document.getElementById('cSelection').textContent = computerSelection;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function checkWinner() {
    if( rounds === 5){
        if(computerScore === playerScore){
            document.getElementById('finalResult').textContent = "It's a draw! :P";
        } else if (playerScore > computerScore){
            document.getElementById('finalResult').textContent = "You win this time! ;)";
        } else {
            document.getElementById('finalResult').textContent = "You lose, keep trying! :(";
        }
        return true;
    }
    return false;
}

//Plays 5 rounds of the game, ask for the player selection

function game(){

    const options = document.querySelectorAll('.rps-btn');
    options.forEach(option => option.addEventListener('click', () => {
        const computerSelection = computerPlay();
        const playerSelection = option.id;
        document.getElementById('finalResult').textContent = '';

        playRound(playerSelection, computerSelection);
        updateScore(playerSelection,computerSelection);
        rounds++;
        if(checkWinner()) {
            rounds = computerScore = playerScore = 0;
            updateScore(playerSelection, computerSelection);
        };
    }));
}

game();
