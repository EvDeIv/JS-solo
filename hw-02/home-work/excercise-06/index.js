let input;
const numbers = [];
let total = 0;
const addNumber = function(array) {
  for (number of array) {
    total += number;
  }
  return total;
};
do {
  input = prompt('Введите число:');
  if (isNaN(input) || input === '') {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(Number(input));
    console.log(numbers);
  }
} while (input !== null);
total = addNumber(numbers);
alert(`Общая сумма чисел равна ${total}`);
