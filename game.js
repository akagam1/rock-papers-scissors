let compPoint = 0;
let userPoint = 0;

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
            return "It is a tie";
        }

        if (computer == "Paper") {
            compPoint += 1;
            return `"Computer Wins!" ${computer} beats ${player}`;
        }
        if (computer == "Scissors") {
            userPoint += 1;
            return `"You Won"  ${player} beats ${computer}`;
        }
    }

    if (player == "paper") {

        if (computer == "Paper") {
            return "It is a tie";
        }

        if (computer == "Scissors") {
            compPoint += 1;
            return `"Computer Wins!" ${computer} beats ${player}`;
        }
        if (computer == "Rock") {
            userPoint += 1;
            return `"You Won"  ${player} beats ${computer}`;
        }
    }

    if (player == "scissors") {

        if (computer == "Scissors") {
            return "It is a tie";
        }

        if (computer == "Rock") {
            compPoint += 1;
            return `"Computer Wins!" ${computer} beats ${player}`;
        }
        if (computer == "Paper") {
            userPoint += 1;
            return `"You Won"  ${player} beats ${computer}`;
        }
    }
}

const rockBut = document.getElementById('rockBut');
const paperBut = document.getElementById('paperBut');
const scissorBut = document.getElementById('scissorBut');
const playerPoint = document.getElementsByClassName('playerPoint');
const computerPoint = document.getElementsByClassName('computerPoint');

rockBut.addEventListener('click', () => clicked('rock'));
paperBut.addEventListener('click', () => clicked('paper'));
scissorBut.addEventListener('click', () => clicked('scissors'));

function clicked(playerSelection) {
    console.log(playRound(playerSelection, computerPlay()));
    if (userPoint == 5) {
        alert("You have won the game");
        compPoint = 0;
        userPoint = 0;
    }

    if (compPoint == 5) {
        alert("Computer won, you lost");
        compPoint = 0;
        userPoint = 0;

    }
}