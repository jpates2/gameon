const minePlayButton = document.querySelector(".mine-play-button");
const minePlayButtonContainer = document.querySelector(".mine-play-button-container");
const mineGame = document.querySelector(".mine-game");
const mineTable = document.querySelector(".mine-table");
const mineTableContainer = document.querySelector(".mine-table-container");
const mineResultLeft = document.querySelector(".mine-result-left");
const mineResultRight = document.querySelector(".mine-result-right");
const minePlayAgainButton = document.querySelector(".mine-play-again-button");

let minePlaying, bomb, mineTurns;
let bombs = [];

const startMine = function() {
  minePlayButtonContainer.classList.add("fade-out");
  mineGame.classList.add("fade-in");
  mineGame.classList.remove("hidden-delay");
  minePlaying = true;
  bombs = [];
  mineTurns = 0;
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

  for (let i = 0; i < mineBoard.length; i++)
    mineBoard[i].addEventListener("click", revealMineCell, true);
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
  mineTurns ++;

  if (minePlaying) {
    const mineCell = e.currentTarget;
    const mineRow = mineCell.parentElement.rowIndex;
    const mineCol = mineCell.cellIndex
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
      mineCell.removeEventListener("click", revealMineCell, true);
      let numMineBombs = 0;
      // mineCell.classList.add("mine-cell-number");

      adjCells.forEach (function (cell) {
        if (!cell.includes("--") && !cell.includes("10")) {
          if (document.getElementById(cell).classList.contains("mine-cell-bomb")) {
            numMineBombs ++;
          }
        }
      })

      console.log(mineTurns);

      mineCell.textContent = numMineBombs;
      mineCell.classList.add("mine-cell-number");
    }

    if (mineTurns >= (100 - bombs.length)) {
      endMineGame();
      winMineGame();
    }
  }

  // document.getElementById(`cell-${mineCell.parentElement.rowIndex}-${mineCell.cellIndex}`).classList.remove("mine-cell-hidden")
  // mineCell.classList.remove("mine-cell-hidden");

  // console.log(mineCell);
  // console.log(mineCell.parentElement.rowIndex, mineCell.cellIndex);
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
