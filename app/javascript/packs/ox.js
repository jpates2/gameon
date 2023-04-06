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

let oxBoardObject = {
  oxTopLeft: 1,
  oxTopCenter: 2,
  oxTopRight: 3,
  oxMiddleLeft: 4,
  oxMiddleCenter: 5,
  oxMiddleRight: 6,
  oxBottomLeft: 7,
  oxBottomCenter: 8,
  oxBottomRight: 9
}

let activeOxPlayer;

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
  // oxPlaying = true;
}

const switchPlayerOx = function () {
  activeOxPlayer = activeOxPlayer === 0 ? 1 : 0;
  oxPlayer0.classList.toggle("ox-active-player");
  oxPlayer1.classList.toggle("ox-active-player");
};

const oxClickBoard = function (e) {
  const oxCell = e.target;
  const oxValue = activeOxPlayer === 0 ? "O" : "X";
  switchPlayerOx();
  oxTurn(oxCell, oxValue)
  console.log(oxCell);
  console.log(oxCell.cellIndex, oxCell.parentElement.rowIndex);

}

function oxTurn(oxCell, oxValue) {
  oxCell.innerText = oxValue
}

for (let i = 0; i < oxBoardBox.length; i++)
  oxBoardBox[i].addEventListener("click", oxClickBoard, {once: true});
