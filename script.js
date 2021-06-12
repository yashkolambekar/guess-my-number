'use strict';

let number = 0;
let score = 20;
let highscore = 0;

function generate() {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('#number').textContent = "?";
    document.body.style.backgroundColor = 'rgb(30, 30, 30)';
    document.querySelector('.guess').value = undefined;

  number = (Math.floor(Math.random() * 20) + 1);
}

function check() {
  const guess = Number(document.querySelector('.guess').value);

  if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Answer!';
    document.querySelector('#number').textContent = number;
    document.body.style.backgroundColor = 'rgb(19, 72, 19)';
    if(score > highscore){
        highscore = score;
        document.querySelector('.high-score').textContent = highscore;
    }
  }

  if (guess !== number) {
      if(score <= 0){
        document.querySelector('.message').textContent = 'You lost the game!';
        return;
      }
    document.body.style.backgroundColor = 'rgb(72, 19, 19)';
    score--;
    document.querySelector('.score').textContent = score;
    if (guess > number) {
      document.querySelector('.message').textContent = 'Too high';
    }
    if (guess < number) {
      document.querySelector('.message').textContent = 'Too low';
    }
  }
}

generate();
document.querySelector('#check').addEventListener('click', check);
document.querySelector('.again').addEventListener('click', generate);