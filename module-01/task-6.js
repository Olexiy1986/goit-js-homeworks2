'use strict';

let total = 0;
let input;

do {
  input = +prompt('Введите число!');
  total += input;
} while (input);
alert('Общая сумма чисел равна [' + total + ']');
