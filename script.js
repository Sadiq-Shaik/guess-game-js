'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').value);
// document.querySelector('.message').textContent = 'correct number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 120;

// // document.querySelector('.guess').textContent = 15; // doesnt work
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 15;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; // state variable

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess);

  //when player enetrs no input or 0 input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when player guess too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//game reset when again! button is clicked
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20; // state variable

  document.querySelector('.message').textContent = 'Start guessing!';

  document.querySelector('.score').textContent = 20;

  document.querySelector('.guess').value = '';

  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
