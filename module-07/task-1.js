'use strict';

const items = document.querySelectorAll('.item');
items.forEach(item => {
  const header = item.querySelector('h2');
  const lis = item.querySelectorAll('li');
  const category = `Категория: ${header.textContent}`;
  const count = `Количество элементов: ${lis.length}`;
  console.log(category);
  console.log(count);
});
