'use strict';

const formatString = function(string) {
  const originString = string;
  const formating = originString.slice(0, 40);
  if (string.length < 40) {
    return (originString);
  } else { 
    return (`${formating} ...`);
  }
};

(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

formatString('Curabitur ligula sapien.');
// вернется оригинальная строка

formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.');
// вернется форматированная строка