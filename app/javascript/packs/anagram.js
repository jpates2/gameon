const anagramPlayButton = document.querySelector(".anagram-play-button");
const anagramPlayAgainButton = document.querySelector(".anagram-play-again-button");
const anagramPlayButtonContainer = document.querySelector(".anagram-play-button-container");
const anagramGame = document.querySelector(".anagram-game");
const anagramWord = document.querySelector(".anagram-word");
const anagramGoButton = document.querySelector(".anagram-go-button");
const anagramButton = document.querySelector(".anagram-button");
const anagramGuess = document.querySelector("#user-anagram-guess");
const anagramResult = document.querySelector(".anagram-result");
const anagramResultCorrect = document.querySelector(".anagram-result-correct");

const startAnagram = function() {
  anagramPlayButtonContainer.classList.add("fade-out");
  anagramGame.classList.add("fade-in");
  anagramGame.classList.remove("hidden-delay");
  anagramWord.innerHTML = (randomAnagram(anagramWordbank).toUpperCase()).split("").join(" ");
  // anagramWord.innerHTML = "_   ".repeat(randomAnagram(anagramWordbank).length);
}

if (anagramPlayButton) {
  anagramPlayButton.addEventListener("click", startAnagram);
}

const anagramWordbank = {
  melon: "lemon",
  listen: "silent",
  players: "parsley",
  deductions: "discounted",
  resistance: "ancestries"
};

let anagramPair;

const randomAnagram = function (obj) {
  const keys = Object.keys(obj);
  const randomAnagram = keys[Math.floor(Math.random() * keys.length)];
  anagramPair = obj[`${randomAnagram}`];
  return randomAnagram;
};

const checkAnagram = function() {
  if (anagramGuess.value.toLowerCase() === anagramPair) {
    anagramGoButton.innerText = "CORRECT";
    anagramGoButton.classList.add("anagram-result-correct");
    anagramGoButton.disabled = true;
    anagramPlayAgainButton.classList.remove("hidden");
    anagramResult.classList.add("hidden");
  } else {
    anagramResult.classList.remove("hidden");
    anagramResult.innerText = "INCORRECT ANSWER, TRY AGAIN";
  }
  anagramGuess.value = "";
}

if (anagramGoButton) {
  anagramGoButton.addEventListener("click", checkAnagram);
}

const playAgain = function() {
  anagramPlayAgainButton.classList.add("hidden");
  anagramWord.innerHTML = (randomAnagram(anagramWordbank).toUpperCase()).split("").join(" ");
  anagramGoButton.innerText = "GO";
  anagramGoButton.classList.remove("anagram-result-correct");
  anagramResult.classList.innerText = "";
}

if (anagramPlayAgainButton) {
  anagramPlayAgainButton.addEventListener("click", playAgain)
}
