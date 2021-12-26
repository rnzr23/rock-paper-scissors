let playerScore = 0;
let computerScore = 0;

// Choose randomly the computer play

function computerPlay() {
    let elements = ['Rock', 'Paper', 'Scissors'];

    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    return randomElement;
}

// Plays a single round of the game

function playRound(playerSelection, computerSelection) {

    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "It's a draw!";
    }
    else if((playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER') || 
    (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS') ||
    (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK')){

        computerScore++;
        return "You Lose! "  + computerSelection + " beats " +  playerSelection[0].toUpperCase() + playerSelection.slice(1);
    } else {
        playerScore++;
        return "You Win! " + playerSelection[0].toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection ;
    }

}

//Plays 5 rounds of the game, ask for the player selection

function game(){

    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose your weapon!");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

    if(computerScore === playerScore){
        console.log("It's a draw!");
    } else if (playerScore > computerScore){
        console.log("You win this time! ;)");
    } else {
        console.log("You lose, keep trying! :(");
    }
}

game();
