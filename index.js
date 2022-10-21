let chanceTaken = 0;
let score = 100;

const game = () => {

    let randomNumber = Math.round(Math.random() * 100);
    const guessedNumber = prompt('Guess the Number between 1 - 100');

    // Validating Entered number
    if (guessedNumber > 100 || guessedNumber < 1 || !guessedNumber) {
        console.log('Please Enter Number between 1 and 100');
        game();
        return;
    }

    //If user guessed the correct Number
    if (parseInt(guessedNumber) === randomNumber) {
        chanceTaken += 1;
        const greet = `Congratulations! You guessed the right number, you scored ${score} using ${chanceTaken} chances in this game.`
        console.log(greet);
        const playAgain = prompt('Want to play again? y/n');
        if (playAgain === "y") {
            game()
        } else {
            console.log('Well Played!')
        }
    } else {
        chanceTaken += 1;
        score -= 1;
        console.log(`Sorry, Your predicted a ${guessedNumber > randomNumber ? 'greater' : 'lesser'} number, Try Again`)
        console.log(`Right Number was ${randomNumber}`)
        //Restart the game
        game()
    }
}

game()