const flashPlayButton = document.querySelector(".flash-play-button");
const flashPlayAgainButton = document.querySelector(".flash-play-again-button");
const flashPlayButtonContainer = document.querySelector(".flash-play-button-container");
const flashGame = document.querySelector(".flash-game");
const flashStartMsg = document.querySelector(".flash-start-msg");
const flashTable = document.querySelector(".flash-table");

const startFlash = function() {
  flashPlayButtonContainer.classList.add("fade-out");
  flashGame.classList.add("fade-in");
  flashGame.classList.remove("hidden-delay");
  flashStartMessage();
  buildFlashGrid();
}

function flashStartMessage() {
  // flashStartMsg.textContent = "GET READY...";
  flashStartMsg.classList.add("fade-in");
  flashStartMsg.classList.remove("hidden-delay");

  setTimeout(function(){
    flashStartMsg.classList.add("hidden");
  }, 3000);
}

if (flashPlayButton) {
  flashPlayButton.addEventListener("click", startFlash);
}

const flashCellID = function(i, j) {
  return 'flashcell-' + i + '-' + j;
}

const buildFlashGrid = function() {
  for (i = 0; i < 5; i++) {
    let row = document.createElement("tr");
    for (j = 0; j < 5; j++) {
      let column = document.createElement("td");
      column.setAttribute("class", "flash-grid");
      column.id = flashCellID(i, j);
      row.appendChild(column);
    }
    flashTable.appendChild(row);
  }
}
