const minePlayButton = document.querySelector(".mine-play-button");
const minePlayButtonContainer = document.querySelector(".mine-play-button-container");
const mineGame = document.querySelector(".mine-game");
const mineTable = document.querySelector(".mine-table");
const mineTableContainer = document.querySelector(".mine-table-container");
const mineResultLeft = document.querySelector(".mine-result-left");
const mineResultRight = document.querySelector(".mine-result-right");
const minePlayAgainButton = document.querySelector(".mine-play-again-button");

let minePlaying, bomb, mineCurrent, minePopulated;
let bombs = [];

const startMine = function() {
  minePlayButtonContainer.classList.add("fade-out");
  mineGame.classList.add("fade-in");
  mineGame.classList.remove("hidden-delay");
  minePlaying = true;
  bombs = [];
  minePopulated = 0;
  buildMineTable();
}

if (minePlayButton) {
  minePlayButton.addEventListener("click", startMine);
}

const cellID = function(i, j) {
  return 'cell-' + i + '-' + j;
}

const buildMineTable = function() {
  for (i = 0; i < 10; i++) {
    let row = document.createElement("tr");
    for (j = 0; j < 10; j++) {
      let column = document.createElement("td");
      column.setAttribute("class", "mine-board-box mine-cell-hidden");
      column.id = cellID(i, j);
      row.appendChild(column);
    }
    mineTable.appendChild(row);
  }

  placeBomb();

  const mineBoard = document.querySelectorAll(".mine-board-box");

  for (let i = 0; i < mineBoard.length; i++) {
    mineCurrent = mineBoard[i];
    mineCurrent.addEventListener("click", revealMineCell);
  }
}

let currentBomb;

const placeBomb = function() {
  for (i = 0; i < 10; i++) {
    bombs.push([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
  }

  bombs.forEach (function(bomb) {
    currentBomb = document.getElementById(`cell-${bomb[0]}-${bomb[1]}`);
    currentBomb.classList.add("mine-cell-bomb");
  })
}

const revealMineCell = function (e) {
  if (minePlaying) {

    const mineCell = e.currentTarget;
    const mineRow = mineCell.parentElement.rowIndex;
    const mineCol = mineCell.cellIndex;
    const adjCells = [
      `cell-${mineRow - 1}-${mineCol - 1}`,
      `cell-${mineRow}-${mineCol - 1}`,
      `cell-${mineRow + 1}-${mineCol - 1}`,
      `cell-${mineRow - 1}-${mineCol}`,
      `cell-${mineRow + 1}-${mineCol}`,
      `cell-${mineRow - 1}-${mineCol + 1}`,
      `cell-${mineRow}-${mineCol + 1}`,
      `cell-${mineRow + 1}-${mineCol + 1}`
    ]

    if (mineCell.classList.contains("mine-cell-bomb")) {
      mineCell.textContent = "💣";
      mineCell.classList.add("mine-cell-bomb-colour");
      endMineGame();
      loseMineGame();
    } else {
      let numMineBombs = 0;

      adjCells.forEach (function (cell) {
        if (!cell.includes("--") && !cell.includes("10")) {
          if (document.getElementById(cell).classList.contains("mine-cell-bomb")) {
            numMineBombs ++;
          }
        }
      })

      mineCell.textContent = numMineBombs;
      mineCell.classList.add("mine-cell-number");
      mineCell.removeEventListener("click", revealMineCell); // can reclick on cells but last well works
      // mineCurrent.removeEventListener("click", revealMineCell); can't reclick on cell but last cell doesn't work
    }

    const mineBoardCells = document.querySelectorAll(".mine-board-box");

    minePopulated = 0;
    mineBoardCells.forEach(function (cell) {
      if (cell.classList.contains("mine-cell-bomb") || cell.classList.contains("mine-cell-number")) {
        minePopulated ++;
      }
    })

    if (minePopulated >= 100) {
      endMineGame();
      winMineGame();
    }

  }
  console.log(`bombs: ${Array.from(new Set(bombs)).length}`);
  console.log(`clicks: ${minePopulated}`);
}

const endMineGame = function () {
  minePlaying = false;
  minePlayAgainButton.classList.remove("hidden");
}

const winMineGame = function () {
  mineResultLeft.textContent = "YOU";
  mineResultRight.textContent = "WIN";
}

const loseMineGame = function () {
  mineResultLeft.textContent = "GAME";
  mineResultRight.textContent = "OVER";
}

const restartMine = function () {
  mineResultLeft.textContent = "";
  mineResultRight.textContent = "";
  mineTable.textContent = "";
  minePlayAgainButton.classList.add("hidden");
  startMine();
}

if (minePlayAgainButton) {
  minePlayAgainButton.addEventListener("click", restartMine)
}
