"use strict";

// 1.a) //

let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

let todayDate = new Date().toLocaleString('ru', options);
let currentDate = todayDate[0].toUpperCase() + todayDate.slice(1).replace('г.', 'года,');
let hours = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds(); 
let currentTime = `${hours} ${declOfNum(hours, ['час', 'часа', 'часов'])} ${min} ${declOfNum(min, ['минута', 'минуты', 'минут'])} ${sec} ${declOfNum(sec, ['секунда', 'секунды', 'секунд'])}`;
  
function declOfNum(n, textForms) {   
  n = Math.abs(n) % 100; 
  var n1 = n % 10;
  if (n > 10 && n < 20) { return textForms[2]; }
  if (n1 > 1 && n1 < 5) { return textForms[1]; }
  if (n1 == 1) { return textForms[0]; }
  return textForms[2];
}

function getCurrentTime() {
  console.log(`Сегодня ${currentDate} ${currentTime}`);
}

setInterval(getCurrentTime, 1000);

// 1.b //

let today = new Date().toLocaleString('ru').replace(',', ' -' );

console.log(today);










