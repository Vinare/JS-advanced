'use strict'

let notNumber

 while (isNaN(notNumber) || notNumber.toString().trim() === "" || notNumber === null) {
   notNumber = +prompt('Bведите число')
 }

 console.log (typeof notNumber)



