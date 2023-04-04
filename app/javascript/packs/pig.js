const pigPlayButton = document.querySelector(".pig-play-button");
const pigPlayButtonContainer = document.querySelector(".pig-play-button-container");
const pigGame = document.querySelector(".pig-game")
const pigBtnRoll = document.querySelector(".pig-btn-roll")
const pigBtnHold = document.querySelector(".pig-btn-hold")
const pigPlayer1 = document.querySelector(".pig-player-1")
const pigPlayer2 = document.querySelector(".pig-player-2")
const pigScore1 = document.querySelector(".pig-score-1")
const pigScore2 = document.querySelector(".pig-score-2")
const pigCurrent1 = document.querySelector(".pig-current-1")
const pigCurrent2 = document.querySelector(".pig-current-2")
const pigShowDice = document.querySelector(".fa-dice")
const pigDice = document.querySelector(".pig-dice")

let scores, currentScore, activePlayer, playing;

const startPig = function() {
  pigPlayButtonContainer.classList.add("fade-out");
  pigGame.classList.add("fade-in");
  pigGame.classList.remove("hidden-delay");
  // pigShowDice.classList.remove("hidden");
  // pigShowDice.classList.add("fade-out-slow");
}

if (pigPlayButton) {
  pigPlayButton.addEventListener("click", startPig);
}

const initialisePig = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  pigScore1.textContent = 0;
  pigScore2.textContent = 0;
  pigCurrent1.textContent = 0;
  pigCurrent2.textContent = 0;
}

initialisePig();

const switchPlayer = function () {
  document.querySelector(`pig-current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  pigPlayer1.classList.toggle("pig-active-player");
  pigPlayer2.classList.toggle("pig-active-player");
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
    // pigDice.classList.remove("hidden");
    pigDice.classList.add("fa-solid");
    pigDice.classList.add(`fa-dice-${diceWords[dice]}`);
    // pigDice.classList.add("fade-in");
    console.log(`fa-dice-${diceWords[dice]}`);
  }
}

if (pigBtnRoll) {
  pigBtnRoll.addEventListener("click", pigRoll)
}
