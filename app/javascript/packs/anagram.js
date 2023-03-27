const anagramPlayButton = document.querySelector(".anagram-play-button");
const anagramPlayButtonContainer = document.querySelector(".anagram-play-button-container");

const startAnagram = function() {
  anagramPlayButtonContainer.classList.add("fade-out");
  console.log("hide");
}

if (anagramPlayButton) {
  anagramPlayButton.addEventListener("click", startAnagram);
}
