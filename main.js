let randomNo = Math.random() * 11
let guess;

function guessGame() {
    let fixedNo = Math.floor(randomNo);

    do {
        guess = prompt('Guess a number  from  1-10')
        console.log(guess, fixedNo);

        if (fixedNo > guess) {
            alert('You guessed too low....Try again');
        } else if (fixedNo < guess) {
            alert('You guessed high.....Try again')
        };
    } while (guess != fixedNo);
    alert('YOU WON!!!')
};

guessGame();