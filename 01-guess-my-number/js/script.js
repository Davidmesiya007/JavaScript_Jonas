"use strict";
// document.querySelector(".number").textContent = 20;
// console.log(document.querySelector(".message").textContent);
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  document.querySelector(".number").textContent = guess;
  console.log(guess, typeof guess);
  console.log(Math.trunc(Math.random() * 20) + 1);
  // guess = 0 then !guess = 1 condiiton is true
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "🎇 Correct Number!";
    document.querySelector(".highscore").textContent = score;
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
