"use strict";

// let dictionary = Object.create(null, {
//     toString: {
//         value() {
//             return Object.keys(this).join();
//         }
        
        
//     }
// });

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";

// alert(dictionary);

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype.sayHi = function() {
    alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();