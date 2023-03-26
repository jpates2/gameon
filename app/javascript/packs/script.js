// window.onload = function() {
//   if(!window.location.hash) {
//       window.location = window.location + '#loaded';
//       window.location.reload();
//   }
// }


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
  console.log("test");
});

closeHangman.addEventListener("click", closeHangmanWindow);

overlayHangman.addEventListener("click", closeHangmanWindow);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !hangmanWindow.classList.contains("hidden")) {
    closeHangmanWindow();
  }
});


const flashWindow = document.querySelector(".flash-window");
const showFlash = document.querySelector(".show-flash");
const closeFlash = document.querySelector(".close-flash");
const overlayFlash = document.querySelector(".overlay-flash");

const closeFlashWindow = function() {
  flashWindow.classList.add("hidden");
  overlayFlash.classList.add("hidden");
};

showFlash.addEventListener("click", function () {
  flashWindow.classList.remove("hidden");
  overlayFlash.classList.remove("hidden");
});

closeFlash.addEventListener("click", closeFlashWindow);

overlayFlash.addEventListener("click", closeFlashWindow);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !flashWindow.classList.contains("hidden")) {
    closeFlashWindow();
  }
});


const oxWindow = document.querySelector(".ox-window");
const showOx = document.querySelector(".show-ox");
const closeOx = document.querySelector(".close-ox");
const overlayOx = document.querySelector(".overlay-ox");

const closeOxWindow = function() {
  oxWindow.classList.add("hidden");
  overlayOx.classList.add("hidden");
};

showOx.addEventListener("click", function () {
  oxWindow.classList.remove("hidden");
  overlayOx.classList.remove("hidden");
});

closeOx.addEventListener("click", closeOxWindow);

overlayOx.addEventListener("click", closeOxWindow);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !oxWindow.classList.contains("hidden")) {
    closeOxWindow();
  }
});


const mineWindow = document.querySelector(".mine-window");
const showMine = document.querySelector(".show-mine");
const closeMine = document.querySelector(".close-mine");
const overlayMine = document.querySelector(".overlay-mine");

const closeMineWindow = function() {
  mineWindow.classList.add("hidden");
  overlayMine.classList.add("hidden");
};

showMine.addEventListener("click", function () {
  mineWindow.classList.remove("hidden");
  overlayMine.classList.remove("hidden");
});

closeMine.addEventListener("click", closeMineWindow);

overlayMine.addEventListener("click", closeMineWindow);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !mineWindow.classList.contains("hidden")) {
    closeMineWindow();
  }
});


const anagramWindow = document.querySelector(".anagram-window");
const showAnagram = document.querySelector(".show-anagram");
const closeAnagram = document.querySelector(".close-anagram");
const overlayAnagram = document.querySelector(".overlay-anagram");

const closeAnagramWindow = function() {
  anagramWindow.classList.add("hidden");
  overlayAnagram.classList.add("hidden");
};

showAnagram.addEventListener("click", function () {
  anagramWindow.classList.remove("hidden");
  overlayAnagram.classList.remove("hidden");
});

closeAnagram.addEventListener("click", closeAnagramWindow);

overlayAnagram.addEventListener("click", closeAnagramWindow);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !anagramWindow.classList.contains("hidden")) {
    closeAnagramWindow();
  }
});


const pigWindow = document.querySelector(".pig-window");
const showPig = document.querySelector(".show-pig");
const closePig = document.querySelector(".close-pig");
const overlayPig = document.querySelector(".overlay-pig");

const closePigWindow = function() {
  pigWindow.classList.add("hidden");
  overlayPig.classList.add("hidden");
};

showPig.addEventListener("click", function () {
  pigWindow.classList.remove("hidden");
  overlayPig.classList.remove("hidden");
});

closePig.addEventListener("click", closePigWindow);

overlayPig.addEventListener("click", closePigWindow);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !pigWindow.classList.contains("hidden")) {
    closePigWindow();
  }
});


const playButton = document.querySelectorAll(".play-button");

const closeAllWindow = function() {
  console.log("play");
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
