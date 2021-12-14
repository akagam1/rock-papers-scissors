function randInt() {
    return Math.floor(Math.random()*3);
}

function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[randInt()];
}

function playerSelection() {
    return prompt("Enter Rock, Paper or Scissors");
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

const games = prompt("How many games do you want to play?");
for (let i=1; i<=games; i++) {
    const player = playerSelection().toLowerCase();
    const computer = computerPlay();
    alert(playRound(player, computer));
}




