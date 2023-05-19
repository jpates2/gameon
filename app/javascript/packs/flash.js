const flashPlayButton = document.querySelector(".flash-play-button");
const flashPlayAgainButton = document.querySelector(".flash-play-again-button");
const flashPlayButtonContainer = document.querySelector(".flash-play-button-container");
const flashGame = document.querySelector(".flash-game");
const flashMsg = document.querySelector(".flash-msg");
const flashTable = document.querySelector(".flash-table");
const flashScoreContainer = document.querySelector(".flash-score-container");
const flashTimerContainer = document.querySelector(".flash-timer-container");

let flashTime

const startFlash = function() {
  flashPlayButtonContainer.classList.add("fade-out");
  flashGame.classList.add("fade-in");
  flashGame.classList.remove("hidden-delay");
  flashStartMessage();
}

function flashStartMessage() {
  // flashStartMsg.textContent = "GET READY...";
  // flashStartMsg.classList.add("fade-in");
  // flashStartMsg.classList.remove("hidden-delay");

  // setTimeout(function(){
    //   flashStartMsg.classList.add("hidden");
    // }, 3000);

    flashMsg.insertAdjacentHTML("afterbegin", `<p class = "flash-start-msg hidden-delay">GET READY...</p>`)
    const flashStartMsg = document.querySelector(".flash-start-msg");

    setTimeout(function () {
      flashStartMsg.classList.remove("hidden-delay");
    }, 1000);

    setTimeout(function () {
      flashStartMsg.remove();
    }, 3000);


    setTimeout(function () {
      buildFlashGrid();

      flashScoreContainer.insertAdjacentHTML("afterbegin",
      `<p class = "flash-score-header">SCORE</p>
      <p class = "flash-score">0</p>`)

      flashTimerContainer.insertAdjacentHTML("afterbegin",
      `<p class = "flash-timer-header">TIMER</p>
      <p class = "flash-timer">10</p>`)

      flashTime = 10;
      const flashTimer = document.querySelector(".flash-timer");

      const flashCountdown = setInterval(function() {
        if(flashTime <= 1) {
          clearInterval(flashCountdown);
        }
        flashTime -= 1;
        flashTimer.textContent = flashTime;
      }, 1000);

      flashColour();

    }, 4000);
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
        column.setAttribute("class", "flash-grid flash-board-box");
        column.id = flashCellID(i, j);
        row.appendChild(column);
      }
      flashTable.appendChild(row);
    }

  const flashBoard = document.querySelectorAll(".flash-board-box");

  for (let i = 0; i < flashBoard.length; i++) {
    flashCurrent = flashBoard[i];
    flashCurrent.addEventListener("click", clickFlashCell);
  }
}

const clickFlashCell = function () {
  console.log("test");
}

let rand1, rand2;

const flashColour = function () {
  let colourTimer = 10;

  const insertFlashColour = setInterval(function() {
    if (colourTimer <= 1 ) {
      clearInterval(insertFlashColour);
    }
    colourTimer -= 1;
    rand1 = Math.floor(Math.random() * 5)
    rand2 = Math.floor(Math.random() * 5)
    let flashSelectCell = `flashcell-${rand1}-${rand2}`
    document.getElementById(flashSelectCell).style.backgroundColor = "red"
    console.log(flashSelectCell);
    console.log(colourTimer);
    // flashSelectCell.style.backgroundColor = "red";
    // setTimeout(function () {
    //   flashSelectCell.style.backgroundColor = "black";
    // }, 900);
  }, 1000);
}
