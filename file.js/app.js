class Car {
    constructor(model, volume) {
        this.model = model;
        this.volume = volume;
    }
}
class BMW extends Car {
    constructor() {
        super('BMW', 3);
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
//# sourceMappingURL=app.js.map