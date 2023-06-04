function getComputerChoice() {
    const selections = ['rock', 'paper', 'scissor']

    let computerChoice = Math.floor(Math.random() * 3)

    return selections[computerChoice]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let result = ''

    if ((playerSelection !== 'rock') && (playerSelection !== 'paper') && (playerSelection !== 'scissor')) {
        result = 'invalid.'
    } else {
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
    }

    return result
}

function game() {
    const noOfRounds = 5
    let playerScore = 0
    let computerScore = 0
    let result = ''

    for (let index = 0; index < noOfRounds; index++) {
        let playerChoice = prompt('Choose your weapon. Rock, Paper or Scissor?')

        let computerChoice = getComputerChoice()

        let resultMsg = playRound(playerChoice, computerChoice)
        console.log(resultMsg)

        //check second last character of result message to determine win, lose, draw or invalid of current round
        if ( resultMsg[resultMsg.length - 2] === 'w' || resultMsg[resultMsg.length - 2] === 'd' ) {
            continue
        } else if ( resultMsg[resultMsg.length - 2] === 'n' ) {
            playerScore++
        } else {
            computerScore++
        }
    }

    if ( playerScore === computerScore ) {
        result = 'Draw!!!'
    } else if ( playerScore > computerScore ) {
        result = 'Win!!!'
    } else {
        result = 'Lose!!!'
    }

    return result
}

console.log(game())