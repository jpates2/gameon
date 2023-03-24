const hangmanWindow = document.querySelector(".hangman-window");
const showHangman = document.querySelector(".show-hangman");
const closeHangman = document.querySelector(".close-hangman");
const overlayHangman = document.querySelector(".overlay-hangman");

const closeHangmanWindow = function() {
  hangmanWindow.classList.add("hidden");
  overlayHangman.classList.add("hidden");
};

showHangman.addEventListener("click", function () {
  hangmanWindow.classList.remove("hidden");
  overlayHangman.classList.remove("hidden");
});

closeHangman.addEventListener("click", closeHangmanWindow);

overlayHangman.addEventListener("click", closeHangmanWindow);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !hangmanWindow.classList.contains("hidden")) {
    closeHangmanWindow();
  }
});
