let max = parseInt(prompt('enter the maximum limit'))
while (!max) {
    max = parseInt(prompt('Enter a valid number!'))
}

let value = Math.floor(Math.random()*max) + 1

let guess = prompt('Enter your guess')
let count = 1

while (parseInt(guess)!==value) {
    if (guess === 'quit') {
        break;
    }
    guess = parseInt(guess)
    if (guess < value) {
        guess = prompt('Too low! Guess higher')
        count++
    } else if (guess > value) {
        guess = prompt('Too high! Guess lower')
        count++
    } else {
        guess = prompt('Inavlid input')
    }
}
if (guess==='quit') {
    console.log('You quit.')
} else {
    console.log(`You won! it took you ${count} guesses.`)
}

