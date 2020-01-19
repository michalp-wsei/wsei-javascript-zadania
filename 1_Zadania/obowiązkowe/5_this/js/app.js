//zad 0
const car = {
    brand: 'Mercedes',
    color: 'Czarny',
    numberOfKilometers: 0,
    printCarinfo: function () {
        console.log(this.color + ' ' + this.brand + ' ' + this.numberOfKilometers + 'km');
    },
    drive: function (km) {
        this.numberOfKilometers += km;
    }
};

car.printCarinfo();
car.drive(20);
car.printCarinfo();

//zad 1

car.przeglady = [];
car.dodajPrzeglad = function (data) {
    this.przeglady.push(data);
};
car.pokazPrzeglady = function () {
    return this.przeglady;
}

car.dodajPrzeglad('2018-12-19');
car.dodajPrzeglad('2019-12-21');
console.log(car.pokazPrzeglady());

//zad 3
const stairs = {
    step: 0,
    up: function () {
        this.step++;
    },
    down: function () {
        this.step--;
    },
    printStep: function () {
        console.log(this.step);
    }
};

stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep() // 2