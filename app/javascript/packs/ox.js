const oxPlayButton = document.querySelector(".ox-play-button");
const oxPlayButtonContainer = document.querySelector(".ox-play-button-container");
const oxGame = document.querySelector(".ox-game");
const oxPlayer0 = document.querySelector(".ox-player-0");
const oxPlayer1 = document.querySelector(".ox-player-1");
const oxBoardBox = document.querySelectorAll(".ox-board-box");
const oxTopLeft = document.getElementById("ox-top-left");
const oxTopCenter = document.getElementById("ox-top-center");
const oxTopRight = document.getElementById("ox-top-right");
const oxMiddleLeft = document.getElementById("ox-middle-left");
const oxMiddleCenter = document.getElementById("ox-middle-center");
const oxMiddleRight = document.getElementById("ox-middle-right");
const oxBottomLeft = document.getElementById("ox-bottom-left");
const oxBottomCenter = document.getElementById("ox-bottom-center");
const oxBottomRight = document.getElementById("ox-bottom-right");
const oxPlayAgainButton = document.querySelector(".ox-play-again-button");

let oxArray = [[], [], []];

let activeOxPlayer, oxPlaying;

const startOx = function() {
  oxPlayButtonContainer.classList.add("fade-out");
  oxGame.classList.add("fade-in");
  oxGame.classList.remove("hidden-delay");
  initialiseOx();
}

if (oxPlayButton) {
  oxPlayButton.addEventListener("click", startOx);
}

const initialiseOx = function () {
  activeOxPlayer = 0;
  oxArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  oxPlaying = true;
  oxPlayer0.innerText = "PLAYER O";
  oxPlayer1.innerText = "PLAYER X";
  oxPlayer0.classList.remove("ox-winner");
  oxPlayer1.classList.remove("ox-winner");
  oxPlayer0.classList.add("ox-active-player");
  oxPlayer1.classList.remove("ox-active-player");
  oxPlayAgainButton.classList.add("hidden");
  oxBoardBox.innerText = "";

  for (let i = 0; i < oxBoardBox.length; i++)
    oxBoardBox[i].textContent = "";

  for (let i = 0; i < oxBoardBox.length; i++)
  oxBoardBox[i].addEventListener("click", oxClickBoard, {once: true});
}

const restartOx = function () {
  for (let i = 0; i < oxBoardBox.length; i++)
  oxBoardBox[i].removeEventListener("click", oxClickBoard);
  initialiseOx();
}

const switchPlayerOx = function () {
  activeOxPlayer = activeOxPlayer === 0 ? 1 : 0;
  oxPlayer0.classList.toggle("ox-active-player");
  oxPlayer1.classList.toggle("ox-active-player");
};

const oxClickBoard = function (e) {
  if (oxPlaying) {
    const oxCell = e.target;
    const oxValue = activeOxPlayer === 0 ? "O" : "X";
    oxTurn(oxCell, oxValue);
    oxArray[parseInt(e.target.parentElement.rowIndex)][parseInt(e.target.cellIndex)] = oxValue;
    checkOxWinner();
    switchPlayerOx();
  }
}

function oxTurn(oxCell, oxValue) {
  oxCell.innerText = oxValue
}

const checkOxWinner = function () {
  if (oxArray[0][0] === oxArray[1][1] && oxArray[1][1] === oxArray[2][2] || oxArray[0][2] === oxArray[1][1] && oxArray[1][1] === oxArray[2][0]) {
    endOxGame();
  }

  for (let a = 0; a < 3; a++) {
    if (oxArray[a][0] === oxArray[a][1] && oxArray[a][1] === oxArray[a][2]) {
      endOxGame();
    }

    if(oxArray[0][a] === oxArray[1][a] && oxArray[1][a] === oxArray[2][a]) {
      endOxGame();
    }
  }
}

const endOxGame = function () {
  document.querySelector(`.ox-player-${activeOxPlayer}`).textContent = "WINNER";
  document.querySelector(`.ox-player-${activeOxPlayer}`).classList.add("ox-winner");
  oxPlaying = false;
  oxPlayAgainButton.classList.remove("hidden");
}

if (oxPlayAgainButton) {
  oxPlayAgainButton.addEventListener("click", restartOx)
}
