function randInt() {
    return Math.floor(Math.random()*3);
}

function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    return choice[randInt()];
}

