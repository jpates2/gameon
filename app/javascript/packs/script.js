const gamesLaunchButton = document.querySelector(".games-launch-button");

const launchGames = function () {
  window.location.href = "/games";
  window.location.href.reload();
}

if (gamesLaunchButton) {
  gamesLaunchButton.addEventListener("click", launchGames)
}


const hangmanWindow = document.querySelector(".hangman-window");
const showHangman = document.querySelector(".show-hangman");
const closeHangman = document.querySelector(".close-hangman");
const overlayHangman = document.querySelector(".overlay-hangman");
const hangmanLaunchButton = document.querySelector(".hangman-launch-button");

const openHangmanWindow = function() {
  hangmanWindow.classList.remove("hidden");
  overlayHangman.classList.remove("hidden");
}

const closeHangmanWindow = function() {
  hangmanWindow.classList.add("hidden");
  overlayHangman.classList.add("hidden");
};

if (showHangman) {
  showHangman.addEventListener("click", openHangmanWindow);
}

if (closeHangman) {
  closeHangman.addEventListener("click", closeHangmanWindow);
}

if (overlayHangman) {
  overlayHangman.addEventListener("click", closeHangmanWindow);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !hangmanWindow.classList.contains("hidden")) {
    closeHangmanWindow();
  }
});

const launchHangman = function () {
  window.location.href = "/games/hangman";
}

if (hangmanLaunchButton) {
  hangmanLaunchButton.addEventListener("click", launchHangman)
}


const flashWindow = document.querySelector(".flash-window");
const showFlash = document.querySelector(".show-flash");
const closeFlash = document.querySelector(".close-flash");
const overlayFlash = document.querySelector(".overlay-flash");
const flashLaunchButton = document.querySelector(".flash-launch-button");

const closeFlashWindow = function() {
  flashWindow.classList.add("hidden");
  overlayFlash.classList.add("hidden");
};

const openFlashWindow = function() {
  flashWindow.classList.remove("hidden");
  overlayFlash.classList.remove("hidden");
}
if (showFlash) {
  showFlash.addEventListener("click", openFlashWindow);
}

if (closeFlash) {
  closeFlash.addEventListener("click", closeFlashWindow);
}

if (overlayFlash) {
overlayFlash.addEventListener("click", closeFlashWindow);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !flashWindow.classList.contains("hidden")) {
    closeFlashWindow();
  }
});

const launchFlash = function () {
  window.location.href = "/games/flash";
}

if (flashLaunchButton) {
  flashLaunchButton.addEventListener("click", launchFlash)
}

const oxWindow = document.querySelector(".ox-window");
const showOx = document.querySelector(".show-ox");
const closeOx = document.querySelector(".close-ox");
const overlayOx = document.querySelector(".overlay-ox");
const oxLaunchButton = document.querySelector(".ox-launch-button");

const closeOxWindow = function() {
  oxWindow.classList.add("hidden");
  overlayOx.classList.add("hidden");
};

const openOxWindow = function() {
  oxWindow.classList.remove("hidden");
  overlayOx.classList.remove("hidden");
}

if (showOx) {
  showOx.addEventListener("click", openOxWindow);
}

if (closeOx) {
  closeOx.addEventListener("click", closeOxWindow);
}

if (overlayOx) {
overlayOx.addEventListener("click", closeOxWindow);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !oxWindow.classList.contains("hidden")) {
    closeOxWindow();
  }
});

const launchOx = function () {
  window.location.href = "/games/oandx";
}

if (oxLaunchButton) {
  oxLaunchButton.addEventListener("click", launchOx)
}

const mineWindow = document.querySelector(".mine-window");
const showMine = document.querySelector(".show-mine");
const closeMine = document.querySelector(".close-mine");
const overlayMine = document.querySelector(".overlay-mine");
const mineLaunchButton = document.querySelector(".mine-launch-button");

const closeMineWindow = function() {
  mineWindow.classList.add("hidden");
  overlayMine.classList.add("hidden");
};

const openMineWindow = function() {
  mineWindow.classList.remove("hidden");
  overlayMine.classList.remove("hidden");
}

if (showMine) {
  showMine.addEventListener("click", openMineWindow);
}

if (closeMine) {
  closeMine.addEventListener("click", closeMineWindow);
}

if (overlayMine) {
  overlayMine.addEventListener("click", closeMineWindow);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !mineWindow.classList.contains("hidden")) {
    closeMineWindow();
  }
});

const launchMine = function () {
  window.location.href = "/games/minesweeper";
}

if (mineLaunchButton) {
  mineLaunchButton.addEventListener("click", launchMine)
}

const anagramWindow = document.querySelector(".anagram-window");
const showAnagram = document.querySelector(".show-anagram");
const closeAnagram = document.querySelector(".close-anagram");
const overlayAnagram = document.querySelector(".overlay-anagram");
const anagramLaunchButton = document.querySelector(".anagram-launch-button");

const closeAnagramWindow = function() {
  anagramWindow.classList.add("hidden");
  overlayAnagram.classList.add("hidden");
};

const openAnagramWindow = function() {
  anagramWindow.classList.remove("hidden");
  overlayAnagram.classList.remove("hidden");
}

if (showAnagram) {
  showAnagram.addEventListener("click", openAnagramWindow);
}

if (closeAnagram) {
  closeAnagram.addEventListener("click", closeAnagramWindow);
}

if (overlayAnagram) {
  overlayAnagram.addEventListener("click", closeAnagramWindow);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !anagramWindow.classList.contains("hidden")) {
    closeAnagramWindow();
  }
});

const launchAnagram = function () {
  window.location.href = "/games/anagram";
}

if (anagramLaunchButton) {
  anagramLaunchButton.addEventListener("click", launchAnagram)
}

const pigWindow = document.querySelector(".pig-window");
const showPig = document.querySelector(".show-pig");
const closePig = document.querySelector(".close-pig");
const overlayPig = document.querySelector(".overlay-pig");
const pigLaunchButton = document.querySelector(".pig-launch-button");

const closePigWindow = function() {
  pigWindow.classList.add("hidden");
  overlayPig.classList.add("hidden");
};

const openPigWindow = function() {
  pigWindow.classList.remove("hidden");
  overlayPig.classList.remove("hidden");
}

if (showPig) {
  showPig.addEventListener("click", openPigWindow);
}

if (closePig) {
  closePig.addEventListener("click", closePigWindow);
}

if (overlayPig) {
  overlayPig.addEventListener("click", closePigWindow);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !pigWindow.classList.contains("hidden")) {
    closePigWindow();
  }
});

const launchPig = function () {
  window.location.href = "/games/pig";
}

if (pigLaunchButton) {
  pigLaunchButton.addEventListener("click", launchPig)
}

const playButton = document.querySelectorAll(".play-button");

const closeAllWindow = function() {
  hangmanWindow.classList.add("hidden");
  overlayHangman.classList.add("hidden");
  flashWindow.classList.add("hidden");
  overlayFlash.classList.add("hidden");
  oxWindow.classList.add("hidden");
  overlayOx.classList.add("hidden");
  mineWindow.classList.add("hidden");
  overlayMine.classList.add("hidden");
  anagramWindow.classList.add("hidden");
  overlayAnagram.classList.add("hidden");
  pigWindow.classList.add("hidden");
  overlayPig.classList.add("hidden");
}

for (let i = 0; i < playButton.length; i++)
  playButton[i].addEventListener("click", closeAllWindow);

window.addEventListener("popstate", (event) => {
  // temp fix for reloading page from back button
  window.location.reload();
})
