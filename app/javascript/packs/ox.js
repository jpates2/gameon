const oxPlayButton = document.querySelector(".ox-play-button");
const oxPlayButtonContainer = document.querySelector(".ox-play-button-container");
const oxGame = document.querySelector(".ox-game");


const startOx = function() {
  oxPlayButtonContainer.classList.add("fade-out");
  oxGame.classList.add("fade-in");
  oxGame.classList.remove("hidden-delay");
}

if (oxPlayButton) {
  oxPlayButton.addEventListener("click", startOx);
}
