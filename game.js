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
            return `"Computer Wins!" ${computer} beats ${player}`;
        }
        if (computer == "Scissors") {
            return `"You Won"  ${player} beats ${computer}`;
        }
    }

    if (player == "paper") {

        if (computer == "Paper") {
            return "It is a tie";
        }

        if (computer == "Scissors") {
            return `"Computer Wins!" ${computer} beats ${player}`;
        }
        if (computer == "Rock") {
            return `"You Won"  ${player} beats ${computer}`;
        }
    }

    if (player == "scissors") {

        if (computer == "Scissors") {
            return "It is a tie";
        }

        if (computer == "Rock") {
            return `"Computer Wins!" ${computer} beats ${player}`;
        }
        if (computer == "Paper") {
            return `"You Won"  ${player} beats ${computer}`;
        }
    }
}

const rockBut = document.getElementById('rockBut');
const paperBut = document.getElementById('paperBut');
const scissorBut = document.getElementById('scissorBut');

rockBut.addEventListener('click', () => clicked('rock'));
paperBut.addEventListener('click', () => clicked('paper'));
scissorBut.addEventListener('click', () => clicked('scissors'));

function clicked(playerSelection) {
    alert(playerSelection);
}