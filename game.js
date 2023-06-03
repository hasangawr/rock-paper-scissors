function getComputerChoice() {
    const selections = ['rock', 'paper', 'scissor']

    let computerChoice = Math.floor(Math.random() * 3)

    return selections[computerChoice]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let result = ''

    if (playerSelection === computerSelection) {
        result = 'Your strategies align perfectly. It\'s a deadlock, a draw.'
    } else {
        if (playerSelection === 'rock' && computerSelection === 'paper') {
            result = 'Paper smothers your mighty rock. You lose!'
        } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
            result = 'You rock! You win!'
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            result = 'The power of paper prevails. You win!'
        } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
            result = 'Your paper is no match. You\'ve been outplayed. You lose!'
        } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
            result = 'Your opponent\'s rock smashes your scissor. You lose!'
        } else {
            result = 'Your scissor slashes through the competition. You win!'
        }
    }

    return result
}