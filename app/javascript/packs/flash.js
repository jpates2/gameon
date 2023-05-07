const flashPlayButton = document.querySelector(".flash-play-button");
const flashPlayAgainButton = document.querySelector(".flash-play-again-button");
const flashPlayButtonContainer = document.querySelector(".flash-play-button-container");
const flashGame = document.querySelector(".flash-game");
const flashStartMsg = document.querySelector(".flash-start-msg");

const startFlash = function() {
  flashPlayButtonContainer.classList.add("fade-out");
  flashGame.classList.add("fade-in");
  flashGame.classList.remove("hidden-delay");
  flashStartMessage();
}

function flashStartMessage() {
  flashStartMsg.textContent = "GET READY";

  setTimeout(function(){
    flashStartMsg.textContent = "";
  }, 4000);
}

if (flashPlayButton) {
  flashPlayButton.addEventListener("click", startFlash);
}
