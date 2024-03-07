class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        alert(`${this.name} runs with speed ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        alert(`${this.name} stands still.`);
    }

    interval() {
        alert(`Net ya super`);
    }


}

class Rabbit extends Animal {

    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }

    hide() {
        alert(`${this.name} hides`);
    }

    stop(){
        super.stop();
        this.hide();
    }

    interval() {
        setTimeout(()=> super.interval(), 5000);
        alert(`Ya super`);
    }
}


let rabbit = new Rabbit("White Rabbit", 10);
alert(rabbit.name);
alert(rabbit.earLength);

