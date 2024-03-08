class CoffeeMachine {
    #waterLimit = 200;

    #fixWaterLimit(value) {
        if (value < 0 ) return 0;
        if (value > this.#waterLimit) return this.#waterLimit;
    }

    setWaterAmount(value) {
        this.#waterLimit = this.#fixWaterLimit(value);
    }
}


let coffeeMachine = new CoffeeMachine();

coffeeMachine.#fixWaterAmount(123);
coffeeMachine.#waterLimit = 1000;