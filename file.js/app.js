class Car {
    constructor(brand, volume) {
        this.brand = brand;
        this.volume = volume;
    }
}
class BMW extends Car {
    constructor() {
        super('BMW', 3);
    }
    getOpt() {
        console.log(this.model + ' ' + this.length + ' ' + this.numbOfSeats);
    }
    getVolume() {
        console.log(this.volume);
    }
}
class Chevrolet extends Car {
    constructor() {
        super('Chevrolet', 1.6);
    }
    getVolume() {
        console.log(this.volume);
    }
}
class Hyundai extends Car {
    constructor() {
        super('Hyundai', 2.4);
    }
    getVolume() {
        console.log(this.volume);
    }
}
let x5 = new BMW();
x5.model = 'X5';
x5.length = 4.5;
x5.numbOfSeats = 5;
x5.getOpt();
let x6 = new BMW();
x6.model = 'X6';
x6.length = 5;
x6.numbOfSeats = 6;
x6.getOpt();
//# sourceMappingURL=app.js.map