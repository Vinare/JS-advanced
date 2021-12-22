"use strict";

const appData = {
  title: '', 
  screens: [], 
  screenPrice: 0, 
  adaptive: true,  
  rollback: 5,
  allServicePrices: 0,
  fullPrice: 0, 
  servicePercentPrice: 0, 
  services: {}, 

  start: function() {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrice();
    appData.getTitle(); 
    appData.logger();
  },

  asking: function() {
    appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');

    while (!appData.isString(appData.title)) {
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    }

    for (let i = 0; i < 2; i++) {
      let name = prompt('Какие типы экранов нужно разработать?');

      while (!appData.isString(name)) {
          name = prompt('Какие типы экранов нужно разработать?');
      }

      let price = 0;

      do {
          price = prompt('Сколько будет стоить данная работа?');
      } while (!appData.isNumber(price));

      appData.screens.push({id: i, name: name, price: +price});  // формируем массив объектов с ключом и значением
    }
    
    for (let i = 0; i < 2; i++) {
      let name = prompt('Какой дополнительный тип услуги нужен?');
      
      while (!appData.isString(name)) {
          name = prompt('Какой дополнительный тип услуги нужен?');
      }
      
      let price = 0;

      do {
          price = prompt('Сколько это будет стоить?');
      } while (!appData.isNumber(price));  
      
      appData.services[name + (i + 1)] = +price;  // собираем в объект services {} все ответы на вопросы о доп услугах
    }

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },

  isString: function(string) {
    return isNaN(string);
  }, 
  
  isNumber: function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  addPrices: function() {  // суммируем общую стоимость экранов и услуг
   
    appData.screenPrice = appData.screens.reduce(function(sum, screen) {  
      return sum + screen.price;           // суммируем стоимость всех экранов методом reduce
    }, 0);   
    
    for(const service in appData.services) {  // суммируем стоимость всех доп услуг
      appData.allServicePrices += appData.services[service];
    }
  },
  
  getFullPrice: function() {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },
  
  getServicePercentPrice: function() {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
  },
  
  getTitle: function() {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase();
  },
  
  getRollbackMessage: function(price) {
    if (price >= 30000) {
      return 'Даем скидку в 10%';
    } else if (price < 30000 && price >= 15000) {
      return 'Даем скидку в 5%';
    } else if (price < 15000 && price > 0) {
      return 'Скидка не предусмотрена';
    } else {
      return 'Что-то пошло не так';
    }
  },
  logger: function() {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.services);
    console.log(appData.screens);
  }
};

appData.start();





