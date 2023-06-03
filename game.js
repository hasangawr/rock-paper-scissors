function getComputerChoice() {
    const selections = ['rock', 'paper', 'scissor']

    let computerChoice = Math.floor(Math.random() * 3)

    return selections[computerChoice]
}

console.log(getComputerChoice())