abstract class Car {
    constructor(public model: string, protected volume: number) { }

    abstract getVolume(): void;
}

class BMW extends Car{
    constructor(){
        super('BMW', 3);
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
