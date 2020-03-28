'use strict';

const input = document.querySelector('#validation-input');
input.addEventListener('blur', checkValidation);

function checkValidation(e) {
  if (e.target.value.length === Number(input.dataset.length)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
