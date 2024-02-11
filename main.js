let computerNumber = 0;
let playButton = document.getElementById("play-button");
let resetButton = document.querySelector(".button-reset");
let userInput = document.querySelector("#user-input");
let resultAreaImg = document.querySelector(".main-img");
let resultText = document.querySelector(".result-text");
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let chances = 5; 
let userValueList = [];

chanceArea.innerHTML = `남은 기회:${chances}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput);

function pickRandomNumber() {

  computerNumber = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNumber);
}

function play() {

  const userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultText.textContent = "1부터 100 사이의 숫자를 입력하세요";

    return;
  }

  if (userValueList.includes(userValue)) {
    resultText.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력하세요";

    return;
  }

  chances--;
  
  chanceArea.innerHTML = `남은 기회:${chances}`;
  userValueList.push(userValue);
  if (userValue < computerNumber) {
    
    resultText.textContent = "Up!";
  } else if (userValue > computerNumber) {
    
    resultText.textContent = "Down!";
  } else {
    
    resultText.textContent = "정답!";
    gameOver = true;
  }

  if (chances == 0) {
    gameOver = true;
    resultText.textContent = "니가사라 스테이크"
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function focusInput() {
  userInput.value = "";
}

function reset() {

  pickRandomNumber();
  userInput.value = "";
  
  resultText.textContent = "재시작";
  gameOver = false;
  playButton.disabled = false;
  chances = 5;
  chanceArea.innerHTML = `남은 기회:${chances}`;
  userValueList = [];
}

pickRandomNumber();