const minePlayButton = document.querySelector(".mine-play-button");
const minePlayButtonContainer = document.querySelector(".mine-play-button-container");
const mineGame = document.querySelector(".mine-game");
const mineTable = document.querySelector(".mine-table");

let playing, bomb;
let bombs = [];

const startMine = function() {
  minePlayButtonContainer.classList.add("fade-out");
  mineGame.classList.add("fade-in");
  mineGame.classList.remove("hidden-delay");
  playing = true;
  bomb = "💣";
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
    mineBoard[i].addEventListener("click", revealMineCell);

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

  console.log(bombs);
  console.log(`cell-${bombs[0][0]}-${bombs[0][1]}`);
}

const revealMineCell = function (e) {
  const mineCell = e.target;

  if (mineCell.classList.contains("mine-cell-bomb")) {
    mineCell.textContent = "💣";
  } else {
    mineCell.textContent = "1";
    mineCell.classList.add("mine-cell-number")
  }

  // document.getElementById(`cell-${mineCell.parentElement.rowIndex}-${mineCell.cellIndex}`).classList.remove("mine-cell-hidden")
  // mineCell.classList.remove("mine-cell-hidden");

  console.log(mineCell);
  console.log(mineCell.parentElement.rowIndex, mineCell.cellIndex);
}
