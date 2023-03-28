const anagramPlayButton = document.querySelector(".anagram-play-button");
const anagramPlayButtonContainer = document.querySelector(".anagram-play-button-container");
const anagramGame = document.querySelector(".anagram-game");
const anagramWord = document.querySelector(".anagram-word");
const anagramGoButton = document.querySelector(".anagram-go-button");
const anagramGuess = document.querySelector("#user-anagram-guess");
const anagramResult = document.querySelector(".anagram-result");

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

let anagramPair;

const randomAnagram = function (obj) {
  const keys = Object.keys(obj);
  const randomAnagram = keys[Math.floor(Math.random() * keys.length)];
  anagramPair = obj[`${randomAnagram}`];
  return randomAnagram;
};

// const randomAnagram = function (obj) {
//   const keys = Object.keys(obj);
//   return obj[keys[ keys.length * Math.random() << 0]];
// };

// const randomAnagram = function (obj) {
//   const entries = Object.entries(obj);

//   for (const [key, value] of entries) {
//     console.log(key);
//     console.log(value);
//     return key[key.length * Math.random() << 0];
//   }
// };

// const checkAnagram = function() {
//   if (anagramGuess.value.toLowerCase() === anagramWord.innerText.toLowerCase().replace(/\W/g, ''))
//     console.log(true);
// }

const checkAnagram = function() {
  if (anagramGuess.value.toLowerCase() === anagramPair) {
    console.log(true);
    anagramGoButton.innerText = "PLAY AGAIN";
    anagramResult.innerText = "CORRECT, YOU WIN!"
  } else {
    anagramResult.innerText = "INCORRECT ANSWER, TRY AGAIN"
    console.log(false);
  }
  anagramGuess.value = "";
}

if (anagramGoButton) {
  anagramGoButton.addEventListener("click", checkAnagram);
}
