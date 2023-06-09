const hangmanPlayButton = document.querySelector(".hangman-play-button");
const hangmanPlayButtonContainer = document.querySelector(".hangman-play-button-container");
const hangmanGame = document.querySelector(".hangman-game");
const hangmanWord = document.querySelector(".hangman-word");
const hangmanLives = document.querySelector(".hangman-lives");
const hangmanAlphabet = document.querySelector(".hangman-alphabet");
const hangmanAlphabetOne = document.querySelector(".hangman-alphabet-1");
const hangmanAlphabetTwo = document.querySelector(".hangman-alphabet-2");
const hangmanPlayAgainButton = document.querySelector(".hangman-play-again-button");
const hangmanGameResult = document.querySelector(".hangman-game-result");
const hangmanGameResultContainer = document.querySelector(".hangman-game-result-container");

let correctLetters = [];
let incorrectLetters = [];
let hangmanLivesStart = 6;
let playing;

const hangmanWordbank = ["broken", "necessary", "rocket", "trampoline", "firework", "javascript", "calendar", "terrace", "thermometer", "sunglasses", "elephant", "skyscraper"];

let randomHangman = hangmanWordbank[Math.floor(Math.random() * hangmanWordbank.length)].toUpperCase();

const startHangman = function() {
  hangmanPlayButtonContainer.classList.add("fade-out");
  hangmanGame.classList.add("fade-in");
  hangmanGame.classList.remove("hidden-delay");
  playing = true;

  displayHangmanWord();
  displayLives();
  addHangmanEvents();
}

if (hangmanPlayButton) {
  hangmanPlayButton.addEventListener("click", startHangman);
}

function generateLetters() {
  let lettersHTML = "abcdefghijklmnopqrstuvwxyz".split("").map(letter =>
    `<div
      class = "hangman-alphabet-letter hangman-letter-${letter}")>
      ${letter.toUpperCase()}
      </div>`)
      .join("");
  hangmanAlphabet.innerHTML = lettersHTML;
 }

const displayLives = function () {
  hangmanLives.insertAdjacentHTML("afterbegin", `<i class="fa-solid fa-heart fa-solid-hangman"></i>`.repeat(hangmanLivesStart));
}

 const displayHangmanWord = function() {
  hangmanWord.innerHTML = `
    ${randomHangman
    .split("")
    .map(letter => `${correctLetters.includes(letter) ? `${letter} ` : "_ "}`).join("")
  }`

  const innerWord = hangmanWord.innerText.replace(/\n/g, '');

  if(innerWord.split(" ").join("") === randomHangman){
    console.log("game won");
    hangmanLives.innerHTML = "";
    hangmanLives.insertAdjacentHTML("afterend", `<div class = hangman-game-result-container><p class = "hangman-game-result">YOU WIN!</p></div>`)
    hangmanPlayAgainButton.classList.remove("hidden")
  }
}

const hangmanAlphabetLetterA = document.querySelector(".hangman-letter-a");
const hangmanAlphabetLetterB = document.querySelector(".hangman-letter-b");
const hangmanAlphabetLetterC = document.querySelector(".hangman-letter-c");
const hangmanAlphabetLetterD = document.querySelector(".hangman-letter-d");
const hangmanAlphabetLetterE = document.querySelector(".hangman-letter-e");
const hangmanAlphabetLetterF = document.querySelector(".hangman-letter-f");
const hangmanAlphabetLetterG = document.querySelector(".hangman-letter-g");
const hangmanAlphabetLetterH = document.querySelector(".hangman-letter-h");
const hangmanAlphabetLetterI = document.querySelector(".hangman-letter-i");
const hangmanAlphabetLetterJ = document.querySelector(".hangman-letter-j");
const hangmanAlphabetLetterK = document.querySelector(".hangman-letter-k");
const hangmanAlphabetLetterL = document.querySelector(".hangman-letter-l");
const hangmanAlphabetLetterM = document.querySelector(".hangman-letter-m");
const hangmanAlphabetLetterN = document.querySelector(".hangman-letter-n");
const hangmanAlphabetLetterO = document.querySelector(".hangman-letter-o");
const hangmanAlphabetLetterP = document.querySelector(".hangman-letter-p");
const hangmanAlphabetLetterQ = document.querySelector(".hangman-letter-q");
const hangmanAlphabetLetterR = document.querySelector(".hangman-letter-r");
const hangmanAlphabetLetterS = document.querySelector(".hangman-letter-s");
const hangmanAlphabetLetterT = document.querySelector(".hangman-letter-t");
const hangmanAlphabetLetterU = document.querySelector(".hangman-letter-u");
const hangmanAlphabetLetterV = document.querySelector(".hangman-letter-v");
const hangmanAlphabetLetterW = document.querySelector(".hangman-letter-w");
const hangmanAlphabetLetterX = document.querySelector(".hangman-letter-x");
const hangmanAlphabetLetterY = document.querySelector(".hangman-letter-y");
const hangmanAlphabetLetterZ = document.querySelector(".hangman-letter-z");

function hangmanLetterPick(chosenHangmanLetter) {
  if (hangmanLivesStart > 1) {
    if (randomHangman.includes(chosenHangmanLetter)) {
      correctLetters.push(chosenHangmanLetter);
      document.querySelector(`.hangman-letter-${chosenHangmanLetter.toLowerCase()}`).classList.add("hangman-alphabet-letter-correct");
      document.querySelector(`.hangman-letter-${chosenHangmanLetter.toLowerCase()}`).disabled = true;
    } else {
      incorrectLetters.push(chosenHangmanLetter);
      document.querySelector(`.hangman-letter-${chosenHangmanLetter.toLowerCase()}`).classList.add("hangman-alphabet-letter-incorrect")
      document.querySelector(`.hangman-letter-${chosenHangmanLetter.toLowerCase()}`).disabled = true;
      hangmanLivesStart--;
      hangmanLives.innerHTML = "";
      displayLives();
    }
    displayHangmanWord();
    (`alphabet-letter-${chosenHangmanLetter.toLowerCase()}`)
  } else {
    hangmanLives.innerHTML = "";
    hangmanLives.insertAdjacentHTML("afterend", `<div class = hangman-game-result-container><p class = "hangman-game-lose">YOU LOSE!</p></div>`)
    hangmanPlayAgainButton.classList.remove("hidden");
  }
}


const playHangmanAgain = function() {
  window.location.reload();
}

if (hangmanPlayAgainButton) {
  hangmanPlayAgainButton.addEventListener("click", playHangmanAgain)
}

const addHangmanEvents = function() {
hangmanAlphabetLetterA.addEventListener("click", function () {hangmanLetterPick("A")});
hangmanAlphabetLetterB.addEventListener("click", function () {hangmanLetterPick("B")});
hangmanAlphabetLetterC.addEventListener("click", function () {hangmanLetterPick("C")});
hangmanAlphabetLetterD.addEventListener("click", function () {hangmanLetterPick("D")});
hangmanAlphabetLetterE.addEventListener("click", function () {hangmanLetterPick("E")});
hangmanAlphabetLetterF.addEventListener("click", function () {hangmanLetterPick("F")});
hangmanAlphabetLetterG.addEventListener("click", function () {hangmanLetterPick("G")});
hangmanAlphabetLetterH.addEventListener("click", function () {hangmanLetterPick("H")});
hangmanAlphabetLetterI.addEventListener("click", function () {hangmanLetterPick("I")});
hangmanAlphabetLetterJ.addEventListener("click", function () {hangmanLetterPick("J")});
hangmanAlphabetLetterK.addEventListener("click", function () {hangmanLetterPick("K")});
hangmanAlphabetLetterL.addEventListener("click", function () {hangmanLetterPick("L")});
hangmanAlphabetLetterM.addEventListener("click", function () {hangmanLetterPick("M")});
hangmanAlphabetLetterN.addEventListener("click", function () {hangmanLetterPick("N")});
hangmanAlphabetLetterO.addEventListener("click", function () {hangmanLetterPick("O")});
hangmanAlphabetLetterP.addEventListener("click", function () {hangmanLetterPick("P")});
hangmanAlphabetLetterQ.addEventListener("click", function () {hangmanLetterPick("Q")});
hangmanAlphabetLetterR.addEventListener("click", function () {hangmanLetterPick("R")});
hangmanAlphabetLetterS.addEventListener("click", function () {hangmanLetterPick("S")});
hangmanAlphabetLetterT.addEventListener("click", function () {hangmanLetterPick("T")});
hangmanAlphabetLetterU.addEventListener("click", function () {hangmanLetterPick("U")});
hangmanAlphabetLetterV.addEventListener("click", function () {hangmanLetterPick("V")});
hangmanAlphabetLetterW.addEventListener("click", function () {hangmanLetterPick("W")});
hangmanAlphabetLetterX.addEventListener("click", function () {hangmanLetterPick("X")});
hangmanAlphabetLetterY.addEventListener("click", function () {hangmanLetterPick("Y")});
hangmanAlphabetLetterZ.addEventListener("click", function () {hangmanLetterPick("Z")});
}
