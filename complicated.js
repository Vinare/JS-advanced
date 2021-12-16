'use strict';

const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const day = document.getElementById('fordays');  // Получаем div куда будем добавлять дни недели
const todayDay = new Date().getDay() - 1;

week.forEach((item, i) => {
  let newdiv = document.createElement('div');   // Для каждого элемента массива week создаём свой div
  if (i === todayDay) {    // Если текущий день недели соответствует дню недели массива
    newdiv.classList.add('today');    //Вешаем на него класс bold 
    newdiv.innerHTML = week[i];    // Вставляем текст в div
  }
  if (i === 5 || i === 6) {    //Если выходные то
    newdiv.classList.add('italic');    // Выделяем день недели дополнительно курсивом 
    newdiv.innerHTML = week[i];    // Вставляем текст в div
  } else {       // Если не текущий день и не выходные,
    newdiv.innerHTML = week[i];    // то просто вставляем текст без стилей
  }
  day.appendChild(newdiv);  // к предварительно созданному родительскому div добавляем доерние newdiv' ы 
});

