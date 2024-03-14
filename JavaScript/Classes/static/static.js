class Rabbit extends Object {
    constructor(name) {
        super() // this line wasn't here
        this.name = name;
    }
}

let rabbit = new Rabbit("Rab");

alert(rabbit.hasOwnProperty('name'));