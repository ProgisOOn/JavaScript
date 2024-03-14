"use strict";
/* Iterables are 
strings
arrays
list
set */

let range = {
    from: 1,
    to: 5,
};

range[Symbol.iterator] = function() {


    return {
        current: this.from,
        last: this.to,

        next() {

            if (this.current <= this.last) {
                return {done: false, value:this.current++};
            } else {
                return {done:true};
            }

        }
    };
};

for (let num of range) {
    // alert(num);
}

// Arrays and strings are most widely used built-in iterables.

for (let char of "test") {
    // alert(char);
}

let str = "Hello";
let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    // alert(result.value);
}

let arrayLike = {
    0: 'Hello',
    1: 'World',
    length: 2,
}

/*let arr = Array.from(arrayLike); 
alert(arr.pop()); */

let arr = Array.from(range);
alert(arr);

//Objects that can be used in for..of are called iterable