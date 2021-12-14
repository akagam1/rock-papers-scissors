function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    console.log(choice[randInt()])
}

function randInt() {
    return Math.floor(Math.random*3);
}

