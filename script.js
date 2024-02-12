// Generate a random number between 1 and 50
const min = 1;
const max = 50;
let usedNumbers = [];
var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
const ball = document.getElementById('ball');
const generateBtn = document.getElementById('generate-btn');
let clicks = 0;

generateBtn.addEventListener('click', () => {
  if (clicks < 25) {
    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (usedNumbers.includes(randomNumber));

    usedNumbers.push(randomNumber);
    ball.textContent = randomNumber;
    clicks++;
  } else {
    generateBtn.disabled = true;
    ball.textContent = 'END';
  }
}); 