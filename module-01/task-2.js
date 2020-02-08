'use strict';

const total = 100;
const ordered = 20;
let message;

if (ordered > total) {
  message = 'На складе недостаточно товаров!';
} else {
  message = 'Заказ оформлен, с вами свяжеться менеджер.';
}

console.log(message);