import randomNumber from './randomNumber';
import colors from './colors.js';

const refs = {
  startButton: document.querySelector('[data-action="start"]'),
  stopButton: document.querySelector('[data-action="stop"]'),
  body: document.body,
};

let isActive = false;
let intervalId;

refs.startButton.addEventListener('click', function (e) {
  if (!isActive) {
    colorSwitcher(e);
    isActive = true;
  }
});
refs.stopButton.addEventListener('click', function (e) {
  if (isActive) {
    colorSwitcher(e);
    isActive = false;
  }
});

function colorSwitcher(event) {
  if (!intervalId && event.target !== refs.stopButton) {
    intervalId = setInterval(() => {
      refs.body.style.backgroundColor = colors[randomNumber(0, colors.length)];
    }, 1000);
    return;
  }
  clearInterval(intervalId);
  intervalId = null;
}
