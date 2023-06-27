let car = {
    manufacturer: "Audi",
    model: "A3",
    releaseYear: 2012,
    averageSpeed: 40,

    carInfo: function() {
        let myInfo = '';
        myInfo += `Задача 1.\nИнфо об авто:\n`;
        myInfo += `01. Производитель: ${car.manufacturer}\n`;
        myInfo += `02. Модель: ${car.model}\n`;
        myInfo += `03. Год выпуска: ${car.releaseYear} г.\n`;
        myInfo += `04. Средняя скорость: ${car.averageSpeed} км/ч`;
        return myInfo;
    },

    timeCount: function (distance) {
        let resultTime = distance/this.averageSpeed;
        resultTime += resultTime / 4;
        return `Задача 2.\nДля преодоления ${distance} км,\nнеобходимо затратить ${resultTime.toFixed(0)} часов`;
    },

    quantityOfYears: function() {
        let currentDate = new Date();
        let resultDate = currentDate.getFullYear() - this.releaseYear;
        return `Задача 3.\n${resultDate} лет прошло с момента выпуска авто`;
    }
    
};

// Задание 1
alert(car.carInfo());

// Задание 2
alert(car.timeCount(+prompt('Введите расстояние(км):')));

// Задание 3
alert(car.quantityOfYears());