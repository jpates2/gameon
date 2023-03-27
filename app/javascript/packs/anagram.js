const anagramPlayButton = document.querySelector(".anagram-play-button");
const anagramPlayButtonContainer = document.querySelector(".anagram-play-button-container");
const anagramGame = document.querySelector(".anagram-game");
const anagramWord = document.querySelector(".anagram-word");
const anagramCheck = document.querySelector(".anagram-check");

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

// const anagramWordbank = [["melon", "lemon"], ["listen", "silent"], ["players", "parsley"], ["deductions", "discounted"], ["resistance", "ancestries"]];
const anagramWordbank = {
  melon: "lemon",
  listen: "silent",
  players: "parsley",
  deductions: "discounted",
  resistance: "ancestries"
};

const randomAnagram = function (obj) {
  const keys = Object.keys(obj);
  return obj[keys[ keys.length * Math.random() << 0]];
};
