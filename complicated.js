'use strict'


// Из 3-его урока//

let namePerson = 'Артем'

namePerson = 'Александр'

namePerson == 'Артем' ? console.log('Директор') : namePerson == 'Александр' ? console.log('Преподаватель') : console.log('Студент')

//  Урок 4  //

let str = 'string'

function notaString(str) {
  if (typeof str !== 'string') {
    alert('Аргумент не строка!')
  } else {
    console.log(typeof str)
  }

  str = str.trim() 
  return str.length > 30 ? str.slice(0, 30) + '...' : str;
}

notaString(str)




