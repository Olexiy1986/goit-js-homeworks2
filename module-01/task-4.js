'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const sumDroid = prompt('Сколько дроидов вы хотите купить?');
const totalPrice = sumDroid * pricePerDroid;
const rest = credits - totalPrice;

if (sumDroid === null || sumDroid === '') {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  console.log(
    `Вы купили ${sumDroid} дроидов, на счету осталось ${rest} кредитов.`,
  );
}
