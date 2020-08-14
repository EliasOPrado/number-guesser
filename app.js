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
    winningNum = 2,
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
       // disable input
       guessInput.disable = true;
       // change border color
       guessInput.style.borderColor = 'green';
       // set message
       setMessage(`${winningNum} is correct! YOU WIN`, 'green');
   }else{

   }
});

function setMessage(msg, color){
    // define the color of setMessage funtion to red
    // color the second parameter
    message.style.color = color;
    message.textContent = msg;
}