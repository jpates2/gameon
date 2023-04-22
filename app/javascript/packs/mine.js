const minePlayButton = document.querySelector(".mine-play-button");
const minePlayButtonContainer = document.querySelector(".mine-play-button-container");
const mineGame = document.querySelector(".mine-game");
const mineTable = document.querySelector(".mine-table");

let playing, bomb;

const startMine = function() {
  minePlayButtonContainer.classList.add("fade-out");
  mineGame.classList.add("fade-in");
  mineGame.classList.remove("hidden-delay");
  playing = true;
  bomb = "💣";
  buildMineTable();
  placeBomb();
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
      column.setAttribute("class", "mine-board-box");
      column.id = cellID(i, j);
      row.appendChild(column);
    }
    mineTable.appendChild(row);
  }
}

const placeBombs = function() {
  const rows = [];

  for (i = 0; i < 10; i++) {
      placeSingleBomb(rows);
  }
  return rows;
}

let currentBomb;

const placeBomb = function() {
  let bombs = [];

  for (i = 0; i < 10; i++) {
    bombs.push([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
  }

  bombs.forEach (function(bomb) {
    currentBomb = document.getElementById(`cell-${bomb[0]}-${bomb[1]}`);
    currentBomb.textContent = "💣";
    currentBomb.classList.add("mine-bomb-hidden");
  })

  const mineBoard = document.querySelectorAll(".mine-board-box");

  const revealMineBomb = function (e) {
    console.log("bomb test");
    // currentBomb.classList.remove("mine-bomb-hidden");
    // const mineCell = e.target;
    // console.log(bombs[parseInt(e.target.parentElement.rowIndex)][parseInt(e.target.cellIndex)]);
    // bombs[parseInt(e.target.parentElement.rowIndex)][parseInt(e.target.cellIndex)].classList.remove("mine-bomb-hidden");
  }

  for (let i = 0; i < mineBoard.length; i++)
    mineBoard[i].addEventListener("click", revealMineBomb);

  console.log(bombs);
  console.log(`cell-${bombs[0][0]}-${bombs[0][1]}`);
}
