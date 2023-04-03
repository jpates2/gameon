const pigPlayButton = document.querySelector(".pig-play-button");
const pigPlayButtonContainer = document.querySelector(".pig-play-button-container");
const pigGame = document.querySelector(".pig-game")


const startPig = function() {
  pigPlayButtonContainer.classList.add("fade-out");
  pigGame.classList.add("fade-in");
  pigGame.classList.remove("hidden-delay");
}

if (pigPlayButton) {
  pigPlayButton.addEventListener("click", startPig);
}
