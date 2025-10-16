 document.querySelector("h1").innerText = "Guess My Number!";
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  let highscore = 0;

  const displayMessage = function (message) {
    document.querySelector(".message").innerText = message;
  };

  document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    // When there is no input
    if (!guess) {
      displayMessage("⛔ No number!");

      // When player wins
    } else if (guess === secretNumber) {
      displayMessage("🎉 Correct Number!");
      document.querySelector(".number").innerText = secretNumber;

      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";

      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").innerText = highscore;
      }

      // When guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
        score--;
        document.querySelector(".score").innerText = score;
      } else {
        displayMessage("💥 You lost the game!");
        document.querySelector(".score").innerText = 0;
      }
    }
  });

  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Start guessing...");
    document.querySelector(".score").innerText = score;
    document.querySelector(".number").innerText = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
  });   

  