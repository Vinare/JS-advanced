'use strict';

//  №1 //

let notNumber;

notNumber = +prompt('Bведите число');

 while (isNaN(notNumber) || notNumber.toString().trim() === "" || notNumber === 0) {
   notNumber = +prompt('Bведите число');
 }

 console.log(notNumber, typeof notNumber);

//  №2  //

let arr = ['22', '38', '486', '298', '569', '46', '122'];

arr.forEach((number) => {
  if (number.startsWith('2') || number.startsWith('4')) {
  console.log(number);
  }
});

//  №3  //

function isPrime(n) {
  for (let i = 2; i * i <= n; i == 2 ? i++ : i += 2) {
    if (n % i == 0) {
    return false;
  } 
  return n > 1;
}}

const res = [...Array(101)].reduce((a, _, i) => a.concat(isPrime(i) ? `${i}: Делители этого числа: 1 и ${i}` : []) , []).join('\n');

console.log(res);