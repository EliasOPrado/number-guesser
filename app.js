/*
Game Functionality
- Player must guess a number between a min and a max.
- Player gets a certain amount of guesses.
- Notify plauer of guesses remaining.
- Notify the player of the correct answer if loose.
- Let player choose to play again.
*/ 

// Game value
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elements got from
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
/*mousedown event is to be able to see the result
when you win or lose the game.
*/
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

// listen for guess
guessBtn.addEventListener('click', function(){
   let guess = parseInt(guessInput.value);

   // validate
   if(isNaN(guess) || guess < min || guess > max){
       // as there is two parameter the second one will be the color
    setMessage(`Please enter a number between ${min} and ${max}`, `red`);
   }
   // check if won
   if(guess === winningNum){
       // Game over - Won

    gameOver(true, `${winningNum} is correct, YOU WON!` )
   }else{
    // wrong number 
    // decrement the number of guesses the player has
    // guessesLeft = 3 by default
    guessesLeft -= 1;
    // check if guesses is left
    if(guessesLeft === 0){
        // Game over - Lost
        gameOver(false, `Game Over. You Lost. The correct number was ${winningNum}`)
    }else{
        // game continuer - answer wron

        // change border color
        guessInput.style.borderColor = 'red';

        // clear input
        guessInput.value = '';

        // tell user its the wrong number
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left` )
    }
   }
});

// game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    // disable input
    guessInput.disable = true;
    // change border color
    guessInput.style.borderColor = color;
    // change the text color
    message.style.color = color;
    // set message
    setMessage(msg);

    // play again ?
    guessBtn.value = 'Play again';
    guessBtn.className += 'play-again';
}

// get winning number
function getRandomNum(min, max){
   return Math.floor(Math.random() * (max - min + 1) - min);
}

function setMessage(msg, color){
    // define the color of setMessage funtion to red
    // color the second parameter
    message.style.color = color;
    message.textContent = msg;
}