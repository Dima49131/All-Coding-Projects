const rhymeWords1 = ["cab", "ball", "law", "day", "plus", "the", "ten", "free", "lit", "vibe", "coin", "bone", "loud", "rude", "look", "view", "pal", "ball", "mail", "dull", "bell", "eel", "bill", "aisle", "coil", "goal", "curl", "wolf", "card", "soar", "air", "were", "fear", "four", "sang", "song", "young", "strength", "sing", "view"];
const fundementalWords = ["cab", "ball", "law", "day", "plus", "the", "ten", "free", "lit", "vibe", "coin", "bone", "loud", "rude", "look", "view"];


// Function to generate a random word
function generateWord(rhymeWords) {
  const randomIndex = Math.floor(Math.random() * rhymeWords.length);
  const randomWord = rhymeWords[randomIndex];
  return randomWord;
}

// Function to start the timer
function startTimer() {
  let timeLeft = 29;
  const countdown = setInterval(function() {
    if (timeLeft < 0) {
      clearInterval(countdown);
      document.getElementById("user-input").disabled = true;
    } else {
      document.getElementById("time-left").textContent = timeLeft;
      timeLeft--;
    }
  }, 1000);
}

// Function to start the game
function startGame() {
  
// focus on spesific word
//const randomWord = rhymeWords1[0];
  
// fundemental words
const randomWord = generateWord(fundementalWords);
    
// all words
//const randomWord = generateWord(rhymeWords1);
  
  
  document.getElementById("word").textContent = randomWord;
  document.getElementById("user-input").value = "";
  document.getElementById("user-input").disabled = false;
  document.getElementById("time-left").textContent = "30";
  startTimer();
}

// Event listener for start button
document.getElementById("start-btn").addEventListener("click", function() {
  startGame();
});

