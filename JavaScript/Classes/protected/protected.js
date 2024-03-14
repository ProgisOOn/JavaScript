class CoffeeMachine {
    _waterAmount = 0

    get waterAmount () {
        return this._waterAmount
    }

    set waterAmount(value) {
        if (value<0) {
            value = 0;
        }
        this._waterAmount = value;
    }


    constructor (power) {
        this._power = power;
    }

    get power() {
        return this._power;
    }
}

let coffeeMachine = new CoffeeMachine(100);

coffeeMachine.waterAmount = -10;

alert(coffeeMachine.waterAmount);