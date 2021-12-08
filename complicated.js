'use strict'

let notNumber

notNumber = +prompt('Bведите число')

 while (isNaN(notNumber) || notNumber.toString().trim() === "" || notNumber === 0) {
   notNumber = +prompt('Bведите число')
 }

 console.log(notNumber, typeof notNumber)



