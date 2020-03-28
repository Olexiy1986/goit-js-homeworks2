'use strict';

const increm = document.querySelector("[data-action='increment']");
const decrem = document.querySelector("[data-action='decrement']");

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  document.getElementById('value').textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  document.getElementById('value').textContent = counterValue;
};

increm.addEventListener('click', increment);
decrem.addEventListener('click', decrement);
