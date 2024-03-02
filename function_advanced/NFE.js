"use strict";

let sayHi = function(who) {
    if(who) {
        alert(`hello ${who}`);
    } else {
        sayHi('guest');
    }
}

sayHi('fedor');
sayHi();

let welcome = sayHi;
sayHi = null
// welcome(); // ERROR SAYHI IS NOT A AFUNCTION

// SOLUTION --><>

let greeting = function func(who) {
    if(who) {
    alert(`Hello ${who}`);
    } else {
        func('Guest');
    }
};
greeting('Ya');
greeting();

welcome = greeting;
greeting = 'Motivatiu nado podnyt';
welcome('to the club buddy')

//NFE -- nested function expression
//joke
//Named function expression has such type of features