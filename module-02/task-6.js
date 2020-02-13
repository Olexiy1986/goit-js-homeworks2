'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  numbers.push(input);
} while (input !== null && input >= 0);

for (let i = 0; i < numbers.length; i += 1) {
  total += Number(numbers[i]);
}
console.log(`Общая сумма чисел равна ${total}`);
