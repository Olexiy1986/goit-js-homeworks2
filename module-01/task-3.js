'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const password = prompt('ВВедите пароль');

if (password === null || password === '') {
  message = 'Отменено пользователем!';
} else if (password === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else if (password !== ADMIN_PASSWORD) {
  message = 'Доступ запрещен, неверный пароль!';
}

console.log(message);
