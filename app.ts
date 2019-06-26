abstract class Car {
    constructor(public brand: string, protected volume: number) { }

    abstract getVolume(): void;
}

class BMW extends Car{
    constructor(){
        super('BMW', 3);
    }

    public model: string;
    public length: number;
    public numbOfSeats: number;
    public getOpt() {
        console.log(this.model + ' ' + this.length + ' ' + this.numbOfSeats);
    }

    getVolume(): void{
        console.log(this.volume);
    }
}

class Chevrolet extends Car{
    constructor(){
        super('Chevrolet', 1.6);
    }

    getVolume(): void{
        console.log(this.volume);
    }
}

class Hyundai extends Car{
    constructor(){
        super('Hyundai', 2.4);
    }

    getVolume(): void{
        console.log(this.volume);
    }
}

let x5:BMW = new BMW();
x5.model = 'X5';
x5.length = 4.5;
x5.numbOfSeats = 5;
x5.getOpt();

let x6:BMW = new BMW();
x6.model = 'X6';
x6.length = 5;
x6.numbOfSeats = 6;
x6.getOpt();




