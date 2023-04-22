const minePlayButton = document.querySelector(".mine-play-button");
const minePlayButtonContainer = document.querySelector(".mine-play-button-container");
const mineGame = document.querySelector(".mine-game");
const mineTable = document.querySelector(".mine-table");

const startMine = function() {
  console.log("mine test");
  minePlayButtonContainer.classList.add("fade-out");
  mineGame.classList.add("fade-in");
  mineGame.classList.remove("hidden-delay");
  buildMineTable();
}

if (minePlayButton) {
  minePlayButton.addEventListener("click", startMine);
}

const buildMineTable = function() {
  for (i = 0; i < 10; i++) {
    let row = document.createElement("tr");
    for (j = 0; j < 10; j++) {
      let column = document.createElement("td");
      column.setAttribute("class", "mine-board-box")
      row.appendChild(column);
    }
    mineTable.appendChild(row);
  }

  // for (i = 0; i <= 1; i++) {
  //   mineTable.insertAdjacentHTML("afterbegin", `<tr class = "mine-board-row"></tr>`);
  //   for (j = 0; j <= 1; j++) {
  //     mineTable.insertAdjacentHTML("afterbegin", `<td class = "mine-board-box"></td>`);
  //   }
  // }
}
