import { Clock } from "./clock";

class ExtendClock extends Clock {
    constructor (template, precision) {
        super(template);
        this.precision = precision;
    }

    start() {
        super.render()
        super.timer = setInterval(() => this.render(), this.precision);
    }
}

let ExClock = ExtendClock("h:m:s", 100);
ExClock.start()
setTimeout(() => ExClock.stop(), 10000);