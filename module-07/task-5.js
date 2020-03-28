'use strict';

const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

input.addEventListener('input', nameInput);
function nameInput(event) {
  output.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    output.textContent = 'незнакомец';
  }
}
