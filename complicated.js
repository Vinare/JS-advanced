'use strict';

let str = 'string';

function notaString(str) {
  if (typeof str !== 'string') {
    alert('Аргумент не строка!');
  } else {
    console.log(typeof str);
  }

  str = str.trim(); 
  return str.length > 30 ? str.slice(0, 30) + '...' : str;
}

notaString(str);




