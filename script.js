// 'use strict';

// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 19;

// document.querySelector('.guess').value = 22;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) 
  {
    document.querySelector('.message').textContent = 'No Number! 🙄';
  }
   else if (guess === secretNumber)
    {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent =
      'Bravo, Correct Number! 🥳';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore + 1;
    }
  }
else if( guess !== secretNumber){
    if (score > 0) {
        document.querySelector('.message').textContent = (guess>secretNumber) ? '📈 Too High!!' :'📉 Too Low!!';
        document.querySelector('.score').textContent = score--;
        
      } else {
        document.querySelector('.message').textContent = 'GAME OVER !! 😓';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = 'red';
      }
} 
});

//   else if (guess > secretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = '📈 Too High!!';
//       document.querySelector('.score').textContent = score--;
//     } else {
//       document.querySelector('.message').textContent = 'GAME OVER !! 😓';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = 'red';
//     }
//   } else if (guess < secretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = '📉 Too Low!!';
//       document.querySelector('.score').textContent = score--;
//     } else {
//       document.querySelector('.message').textContent = 'GAME OVER !! 😓';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = 'red';
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
