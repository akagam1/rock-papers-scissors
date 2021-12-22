let compPoint = 0;
let userPoint = 0;
let roundWinner = '';

function randInt() {
    return Math.floor(Math.random()*3);
}

function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[randInt()];
}

function playRound(player,computer) {
    if (player == "rock") {

        if (computer == "Rock") {
            roundWinner = 'tie';
        }

        if (computer == "Paper") {
            compPoint += 1;
            roundWinner = 'comp';
            
        }
        if (computer == "Scissors") {
            userPoint += 1;
            roundWinner = 'player';
        }
    }

    if (player == "paper") {

        if (computer == "Paper") {
            roundWinner = 'tie';
        }

        if (computer == "Scissors") {
            compPoint += 1;
            roundWinner = 'comp';
        }
        if (computer == "Rock") {
            userPoint += 1;
            roundWinner = 'player';
        }
    }

    if (player == "scissors") {

        if (computer == "Scissors") {
            roundWinner = 'tie';
        }

        if (computer == "Rock") {
            compPoint += 1;
            roundWinner = 'comp';
        }
        if (computer == "Paper") {
            userPoint += 1;
            roundWinner = 'player';
        }
    }
}

const rockBut = document.getElementById('rockBut');
const paperBut = document.getElementById('paperBut');
const scissorBut = document.getElementById('scissorBut');
const playerPoint = document.getElementsByClassName('playerPoint');
const computerPoint = document.getElementsByClassName('computerPoint');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');

rockBut.addEventListener('click', () => clicked('rock'));
paperBut.addEventListener('click', () => clicked('paper'));
scissorBut.addEventListener('click', () => clicked('scissors'));

function clicked(playerSelection) {
    playRound(playerSelection, computerPlay());
    if (roundWinner === 'comp') {
        computerScore.textContent = `${compPoint}`;
    }
    if (roundWinner === 'player') {
        playerScore.textContent = `${userPoint}`;
    }
    if (userPoint === 5) {
        alert("You have won the game");
        compPoint = 0;
        userPoint = 0;
        playerScore.textContent = `${userPoint}`;
        computerScore.textContent = `${compPoint}`;
        roundWinner = '';
    }

    if (compPoint === 5) {
        alert("Computer won, you lost");
        compPoint = 0;
        userPoint = 0;
        playerScore.textContent = `${userPoint}`;
        computerScore.textContent = `${compPoint}`;
        roundWinner = '';
    }
}