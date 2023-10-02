'use strict';

// DOM Elements
// Create Variables
// Step 1
const inputNumberElement = document.querySelector('.guess');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.highscore');
const messageElement = document.querySelector('.message');
const numberElement = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

// Generate random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1; // 15
console.log('Secret number:');
console.log(secretNumber);

let score = 20;
console.log('Score at start:');
console.log(score);
let highScore = 0;

console.log(inputNumberElement);
console.log(scoreElement);
console.log(highScoreElement);
console.log(messageElement);
console.log(numberElement);
console.log(checkBtn);
console.log(againBtn);

// Step 2
// Add event listener to chekc button
// Anonymous function: Function witout name
document.querySelector('.check').addEventListener('click', function () {

  // Step 3
  // Read value from user
  // Convert string '2' into number 2 use function Number('2') = 2
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log('Guess number:');
  console.log(guessNumber);

  console.log(typeof guessNumber); // number

  // Check if there is not a guess number
  if (guessNumber === 0) {
    // console.log('There is not a number!');
    document.querySelector('.message').textContent = '🚫 Not a number!';
  } else if (guessNumber === secretNumber) {
    if (score > highScore) {
      // score = 20 highScore = 0 20 > 0 true  highScore = 20
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // console.log('Player wins the game');
    document.querySelector('.message').textContent = '🎉 Player wins the game!';

    // Camel Case Notation
    // background-image backgroundImage
    // background-position backgroundPosition
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guessNumber > secretNumber) {
    if (score > 1) {
      // console.log('Number is too high');
      document.querySelector('.message').textContent = '📈 Number is too high!';
      score--; // 20 - 1 = 19
      console.log('Score in number too high:');
      console.log(score); // 19
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#222';
    } else {
      document.querySelector('.message').textContent = 'You lose the game!';
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.score').textContent = '0';
    }
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      // console.log('Number is too low');
      document.querySelector('.message').textContent = '📉 Number is too low!';

      score--;
      console.log('Score in number too low:');
      console.log(score);
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#222';
    } else {
      document.querySelector('.message').textContent = 'You lose the game!';
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.score').textContent = '0';
    }
  }
});

/*
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

// Select again button and attach event listener
document.querySelector('.again').addEventListener('click', function () {
  console.log('You have clicked on again button!');

  // Regenerate random number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  console.log('Secret number in reset functionality:');
  console.log(secretNumber);

  // Restore value of score variable
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';

  // Clear value of input field
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
