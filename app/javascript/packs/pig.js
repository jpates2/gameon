const pigPlayButton = document.querySelector(".pig-play-button");
const pigPlayButtonContainer = document.querySelector(".pig-play-button-container");
const pigGame = document.querySelector(".pig-game")
const pigBtnRoll = document.querySelector(".pig-btn-roll")
const pigBtnHold = document.querySelector(".pig-btn-hold")
const pigPlayer0 = document.querySelector(".pig-player-0")
const pigPlayer1 = document.querySelector(".pig-player-1")
const pigScore0 = document.querySelector(".pig-score-0")
const pigScore1 = document.querySelector(".pig-score-1")
const pigCurrent0 = document.querySelector(".pig-current-0")
const pigCurrent1 = document.querySelector(".pig-current-1")
const pigRound0 = document.querySelector(".pig-round-0")
const pigRound1 = document.querySelector(".pig-round-1")
const pigShowDice = document.querySelector(".fa-dice")
const pigDice = document.querySelector(".pig-dice")
const pigPlayAgainButton = document.querySelector(".pig-play-again-button")

let scores, currentScore, activePlayer, playing;

const startPig = function() {
  pigPlayButtonContainer.classList.add("fade-out");
  pigGame.classList.add("fade-in");
  pigGame.classList.remove("hidden-delay");
  initialisePig();
}

if (pigPlayButton) {
  pigPlayButton.addEventListener("click", startPig);
}

const initialisePig = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  pigScore0.textContent = 0;
  pigScore1.textContent = 0;
  pigCurrent0.textContent = 0;
  pigCurrent1.textContent = 0;
  pigPlayer0.classList.remove("pig-winner")
  pigPlayer1.classList.remove("pig-winner")
  pigPlayer0.classList.add("pig-active-player")
  pigPlayer1.classList.remove("pig-active-player")
  pigPlayAgainButton.classList.add("hidden")
  pigRound0.style.color = "white";
  pigRound1.style.color = "white";
}


const switchPlayer = function () {
  document.querySelector(`.pig-current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  pigPlayer0.classList.toggle("pig-active-player");
  pigPlayer1.classList.toggle("pig-active-player");
};

const pigRoll = function() {
  if (playing) {
    const diceWords = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six"
    }

    const dice = Math.trunc(Math.random() * 6) + 1;
    pigShowDice.classList.add("hidden");
    pigDice.classList = "";
    pigDice.classList.add("fa-solid");
    pigDice.classList.add(`fa-dice-${diceWords[dice]}`);

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`.pig-current-${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
}

if (pigBtnRoll) {
  pigBtnRoll.addEventListener("click", pigRoll)
}


const pigHold = function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`.pig-score-${activePlayer}`).textContent = scores[activePlayer];
  }

  if (scores[activePlayer] >= 20) {
    playing = false;
    document.querySelector(`.pig-player-${activePlayer}`).classList.add("pig-winner");
    document.querySelector(`.pig-player-${activePlayer}`).classList.remove("pig-active-player");
    document.querySelector(`.pig-round-${activePlayer}`).style.color = "black";
    document.querySelector(`.pig-current-${activePlayer}`).textContent = "WINNER";
    pigDice.classList.remove("fa-dice-one");
    pigDice.classList.remove("fa-dice-two");
    pigDice.classList.remove("fa-dice-three");
    pigDice.classList.remove("fa-dice-four");
    pigDice.classList.remove("fa-dice-five");
    pigDice.classList.remove("fa-dice-six");
    pigDice.classList.remove("fa-solid");
    pigDice.classList.add("pig-dice");
    pigShowDice.classList.remove("hidden");
    pigPlayAgainButton.classList.remove("hidden");
    // pigBtnRoll.classList.add
  } else {
    switchPlayer();
  }
}

if (pigBtnHold) {
  pigBtnHold.addEventListener("click", pigHold)
}




if (pigPlayAgainButton) {
  pigPlayAgainButton.addEventListener("click", initialisePig)
}
