'use strict';

const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceGamaica = 120;
const china = 'китай';
const chile = 'чілі';
const australia = 'австралія';
const india = 'індія';
const gamaica = 'ямайка';

const promptLabel = `Выберите страну для доставки товара: Китай, Чілі, Австралія, Індія, Ямайка`;
const userChoise = prompt(promptLabel);
const inLowerCase = userChoise.toLowerCase();
let message;

switch (inLowerCase) {
  case china:
    message = `Доставка в ${china} будет стоить ${priceChina} кредитов`;
    break;

  case chile:
    message = `Доставка в ${chile} будет стоить ${priceChile} кредитов`;
    break;

  case australia:
    message = `Доставка в ${australia} будет стоить ${priceAustralia} кредитов`;
    break;

  case india:
    message = `Доставка в ${chile} будет стоить ${priceIndia} кредитов`;
    break;

  case gamaica:
    message = `Доставка в ${gamaica} будет стоить ${priceGamaica} кредитов`;
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

console.log(message);
