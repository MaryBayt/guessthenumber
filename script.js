"use strict";

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // not a number
  if (!guess) {
    displayMessage("⛔️ No number!");

    // win
  } else if (guess === secretNumber) {
    displayMessage("🥳 Correct!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // number is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😵 You lost!");
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
