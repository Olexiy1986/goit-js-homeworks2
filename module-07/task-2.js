'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const lis = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = item;
  return li;
});
const findIngredients = document.querySelector('#ingredients');

findIngredients.append(...lis);
