'use strict'

//***1.1***//

let lang_array = []

let lang = 'ru'

lang = 'en'

if (lang == 'ru') {
  lang_array = ['Пн', 'Вт', 'СР', 'Чт', 'Пт', 'Сб', 'Вс']
} else if (lang == 'en') {
  lang_array = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
}

console.log(lang_array)

//1.2/

switch(lang) {
  case 'ru': 
    console.log(lang_array = ['Пн', 'Вт', 'СР', 'Чт', 'Пт', 'Сб', 'Вс'])
    break
  case 'en':
    console.log(lang_array = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])
    break
}

//1.3/
lang_array['ru'] = ['Пн', 'Вт', 'СР', 'Чт', 'Пт', 'Сб', 'Вс']
lang_array['en'] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

console.log(lang_array[lang]);

// ***2***//

let namePerson = 'Артем'

namePerson = 'Александр'

namePerson == 'Артем' ? console.log('Директор') : namePerson == 'Александр' ? console.log('Преподаватель') : console.log('Студент')




