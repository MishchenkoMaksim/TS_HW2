class Car {
    constructor(brand) {
        this.brand = brand;
    }
}
class BMW extends Car {
    constructor() {
        super('BMW');
    }
    getOpt() {
        console.log(this.model + ' ' + this.volume + ' ' + this.numbOfSeats);
    }
    getBrand() {
        console.log(this.volume);
    }
}
class Chevrolet extends Car {
    constructor() {
        super('Chevrolet');
    }
    getOpt() {
        console.log(this.model + ' ' + this.volume + ' ' + this.numbOfSeats);
    }
    getBrand() {
        console.log(this.brand);
    }
}
class Hyundai extends Car {
    constructor() {
        super('Hyundai');
    }
    getOpt() {
        console.log(this.model + ' ' + this.volume + ' ' + this.numbOfSeats);
    }
    getBrand() {
        console.log(this.brand);
    }
}
let x5 = new BMW();
x5.model = 'X5';
x5.volume = 3;
x5.numbOfSeats = 5;
x5.getOpt();
let x6 = new BMW();
x6.model = 'X6';
x6.volume = 4;
x6.numbOfSeats = 6;
x6.getOpt();
let aveo = new Chevrolet();
aveo.model = 'Aveo';
aveo.volume = 1.6;
aveo.numbOfSeats = 5;
aveo.getOpt();
let camaro = new Chevrolet();
camaro.model = 'Camaro';
camaro.volume = 5;
camaro.numbOfSeats = 2;
camaro.getOpt();
//# sourceMappingURL=app.js.map