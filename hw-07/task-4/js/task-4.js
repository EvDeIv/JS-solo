let currentValue = 0;

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const valueSpan = document.querySelector("#value");

incrementButton.addEventListener("click", incrementing);
decrementButton.addEventListener("click", decrementing);

function incrementing() {
  currentValue += 1;
  return (valueSpan.innerHTML = `${currentValue}`);
}

function decrementing() {
  currentValue -= 1;
  return (valueSpan.innerHTML = `${currentValue}`);
}
