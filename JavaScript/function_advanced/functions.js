"use strict";

function makeCounterClouser() {
    let count = 0;

    function counter() {
        counter.decrease = function () {
            return alert(--count);
        }

        counter.set = function(value) {
            return alert(count = value);
        }

        return alert(++count);
    }

    return counter;
}

let counter = makeCounterClouser();
// counter();
// counter();
// counter.decrease()
// counter.set(4)

// def pythonbnvnoh() lomka

function makeCounterProperty() {
    function counter() {
        counter.decrease = function () {
            return alert(--counter.count);
        }

        counter.set = function(value) {
            return alert(counter.count = value);
        }

        return alert(++counter.count)
    }
    counter.count = 0;

    return counter;
}

let counter2 = makeCounterProperty();
counter2();
counter2();
counter2();
counter2.decrease();
counter2.set(16);
