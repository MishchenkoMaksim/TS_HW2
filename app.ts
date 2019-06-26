abstract class Car {
    constructor(protected brand: string) { }

    abstract getBrand(): void;
}

class BMW extends Car{
    constructor(){
        super('BMW');
    }

    public model: string;
    public volume: number;
    public numbOfSeats: number;
    public getOpt() {
        console.log(this.model + ' ' + this.volume + ' ' + this.numbOfSeats);
    }

    getBrand(): void{
        console.log(this.volume);
    }
}

class Chevrolet extends Car{
    constructor(){
        super('Chevrolet');
    }

    public model: string;
    public volume: number;
    public numbOfSeats: number;
    public getOpt() {
        console.log(this.model + ' ' + this.volume + ' ' + this.numbOfSeats);
    }

    getBrand(): void{
        console.log(this.brand);
    }
}

class Hyundai extends Car{
    constructor(){
        super('Hyundai');
    }

    public model: string;
    public volume: number;
    public numbOfSeats: number;
    public getOpt() {
        console.log(this.model + ' ' + this.volume + ' ' + this.numbOfSeats);
    }

    getBrand(): void{
        console.log(this.brand);
    }
}

let x5:BMW = new BMW();
x5.model = 'X5';
x5.volume = 3;
x5.numbOfSeats = 5;
x5.getOpt();

let x6:BMW = new BMW();
x6.model = 'X6';
x6.volume = 4;
x6.numbOfSeats = 6;
x6.getOpt();

let aveo:Chevrolet = new Chevrolet();
aveo.model = 'Aveo';
aveo.volume = 1.6;
aveo.numbOfSeats = 5;
aveo.getOpt();

let camaro:Chevrolet = new Chevrolet();
camaro.model = 'Camaro';
camaro.volume = 5;
camaro.numbOfSeats = 2;
camaro.getOpt();



