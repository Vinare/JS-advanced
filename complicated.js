'use strict';

//***1.1***//

let langArray = [];

let lang = 'ru';
lang = 'en';

// if (lang === 'ru') {
//   langArray = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
// } else if (lang === 'en') {
//   langArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// }

// console.log(langArray);

// //1.2//

// switch(lang) {
//   case 'ru': 
//     langArray = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
//   break;
//   case 'en':
//     langArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   break;
// }

// console.log(langArray);

//1.3//

// Способ 1: Через многомерный массив

  langArray['ru'] = ['Пн', 'Вт', 'СР', 'Чт', 'Пт', 'Сб', 'Вс'];
  langArray['en'] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

console.log(langArray[lang]);

// Способ 2 : Через ассоциативный массив

langArray = {
  'ru': ['Пн', 'Вт', 'СР', 'Чт', 'Пт', 'Сб', 'Вс'],
  'en': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
};

console.log(langArray[lang]);

// ***2***//

let namePerson = 'Артем';

namePerson = 'Александр';

namePerson = namePerson == 'Артем' ? console.log('Директор') : namePerson == 'Александр' ? console.log('Преподаватель') : console.log('Студент');




