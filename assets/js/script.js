const game = () => {
  let pScore = 0;
  let cScore = 0;

  const introText = document.querySelector(".intro h1");
  const playBtn = document.querySelector(".intro button");
  const score = document.querySelector(".score");
  const introScreen = document.querySelector(".intro");
  const match = document.querySelector(".match");
  const playerScore = document.querySelector(".player-score p");
  const computerScore = document.querySelector(".computer-score p");
  const winner = document.querySelector(".winner");
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");

  const startGame = () => {
    playBtn.addEventListener("click", () => {
      introScreen.classList.remove("fadeIn");
      introScreen.classList.add("fadeOut");
      match.classList.remove("fadeOut");
      match.classList.add("fadeIn");
      score.classList.remove("fadeOut");
      score.classList.add("fadeIn");
      playerScore.textContent = 0;
      computerScore.textContent = 0;
      winner.textContent = "Choose An Option";
      playerHand.src = `./assets/images/rock.png`;
      computerHand.src = `./assets/images/rock.png`;
      pScore = 0;
      cScore = 0;
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    const computerOption = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOption[computerNumber];

        setTimeout(() => {
          compareHands(this.textContent.toLowerCase(), computerChoice);
          playerHand.src = `./assets/images/${this.textContent.toLowerCase()}.png`;
          computerHand.src = `./assets/images/${computerChoice}.png`;
        }, 1000);

        playerHand.style.animation = "shakePlayer 1s ease";
        computerHand.style.animation = "shakeComputer 1s ease";
        playerHand.src = `./assets/images/rock.png`;
        computerHand.src = `./assets/images/rock.png`;
      });
    });
  };

  const updateScore = () => {
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

    if (pScore === 3) {
      match.classList.remove("fadeIn");
      match.classList.add("fadeOut");
      introScreen.classList.remove("fadeOut");
      introScreen.classList.add("fadeIn");
      introText.textContent = "Game Over! You Won The Game!";
      playBtn.textContent = "Play Again";
      startGame();
    } else if (cScore === 3) {
      match.classList.remove("fadeIn");
      match.classList.add("fadeOut");
      introScreen.classList.remove("fadeOut");
      introScreen.classList.add("fadeIn");
      introText.textContent = "Game Over! Computer Won The Game!";
      playBtn.textContent = "Play Again";
      startGame();
    }
  };

  const compareHands = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }

    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "You Win!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "You Win!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "You Win!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      }
    }
  };
  startGame();
  playMatch();
};

game();
