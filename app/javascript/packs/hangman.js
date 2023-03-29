const hangmanPlayButton = document.querySelector(".hangman-play-button");
const hangmanPlayButtonContainer = document.querySelector(".hangman-play-button-container");
const hangmanGame = document.querySelector(".hangman-game");
const hangmanWord = document.querySelector(".hangman-word");
const hangmanAlphabetOne = document.querySelector(".hangman-alphabet-1");
const hangmanAlphabetTwo = document.querySelector(".hangman-alphabet-2");

const startHangman = function() {
  hangmanPlayButtonContainer.classList.add("fade-out");
  hangmanGame.classList.add("fade-in");
  hangmanGame.classList.remove("hidden-delay");
  hangmanWord.innerHTML = "_   ".repeat(randomHangman.length);
  // addAlphabet();
}

if (hangmanPlayButton) {
  hangmanPlayButton.addEventListener("click", startHangman);
}

const hangmanWordbank = ["broken", "necessary", "rocket", "trampoline", "firework"];

const randomHangman = hangmanWordbank[Math.floor(Math.random() * hangmanWordbank.length)];
console.log(randomHangman);

// const addAlphabet = function() {
//   for (i = 65; i <= 77; i++) {
//     hangmanAlphabetOne.insertAdjacentHTML("beforeend", `<p class = "hangman-alphabet-letter">${(String.fromCharCode(i))}<p>`);
//   }
//   for (i = 78; i <= 90; i++) {
//     hangmanAlphabetTwo.insertAdjacentHTML("beforeend", `<p class = "hangman-alphabet-letter">${(String.fromCharCode(i))}<p>`);
//   }
// }

const hangmanAlphabetLetter = Array.from(document.querySelectorAll(".hangman-alphabet-letter"));
const hangmanAlphabetLetterA = document.querySelector(".hangman-alphabet-letter-a");

const hangmanLetterPick = function() {
  const randomHangmanArray = randomHangman.split("");
  for (i = 0; i < randomHangmanArray.length; i++) {
    if (randomHangmanArray[i].toUpperCase() === hangmanAlphabetLetter[i].innerText) {
      console.log(true, hangmanAlphabetLetter[i.innerText]);
      console.log(false, randomHangmanArray[i].toUpperCase());
      randomHangmanArray.splice(i);
      randomHangmanArray.slice(i, 0, hangmanAlphabetLetter.innerText);
    } else {
      console.log(false, hangmanAlphabetLetter[i].innerText);
      console.log(false, randomHangmanArray[i].toUpperCase());
    }
  }
  console.log("lettercheck");
}

for (let i = 0; i < hangmanAlphabetLetter.length; i++)
  hangmanAlphabetLetter[i].addEventListener("click", hangmanLetterPick);

console.log(hangmanAlphabetLetter);
