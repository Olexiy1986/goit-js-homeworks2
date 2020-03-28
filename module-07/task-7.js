'use strict';

const input = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');
input.addEventListener('input', controlInput);
function controlInput(event) {
  text.style.fontSize = event.currentTarget.value + 'px';
}
