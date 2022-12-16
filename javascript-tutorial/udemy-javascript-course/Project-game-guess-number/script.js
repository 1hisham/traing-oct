'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!' ;

// document.querySelector('.number').textContent =13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.guess').value);

const secretnumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
let score = 20;
console.log(score);
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;

}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number Added!';
    displayMessage('No Number Added!')
  } else if (guess === secretnumber) {
    // document.querySelector('.message').textContent = 'correct Number';
    displayMessage('correct Number')
    document.querySelector('.number').textContent = secretnumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      score = highscore;
      document.querySelector('.highscore').textContent = highscore;
    }

      }else if (guess !== secretnumber) {
        if (score > 1) {

          document.querySelector('.message').textContent = guess >secretnumber ? 'Too High' : 'Too low !';
    
          score--;
          document.querySelector('.score').textContent = score;
        } else {
        //   document.querySelector('.message').textContent = 'you lost';
          displayMessage('You Lost')
          document.querySelector('.score').textContent = 0;
        }
      }

});

//   } else if (guess > secretnumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high';

//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you lost';
//     }
//   } else if (guess < secretnumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low';

//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you lost';
//     }
//   }
// });
 document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
