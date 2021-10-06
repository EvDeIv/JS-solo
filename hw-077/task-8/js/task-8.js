const input = document.querySelector("input");
const renderButton = document.querySelector('[data-action="render"]');
const clearingButton = document.querySelector('[data-action="destroy"]');
const divContainer = document.querySelector("#boxes");

renderButton.addEventListener("click", createBoxes);
clearingButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  let arr = [];
  let currentHeight = 30;
  let currentWidth = 30;
  for (let i = 1; i <= input.value; i++) {
    let divBox = document.createElement("div");
    divBox.style.backgroundColor = randomRGB();
    if (i > 1) {
      currentHeight += 10;
      currentWidth += 10;
    }
    divBox.style.height = `${currentHeight}px`;
    divBox.style.width = `${currentWidth}px`;
    divBox.style.margin = "20px";
    if (i > 1) {
    }
    arr.push(divBox);
  }
  divContainer.append(...arr);
}

function randomRGB() {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return `rgb(${r},${g},${b})`;
}

function destroyBoxes() {
  divContainer.innerHTML = "";
}
