"use strict";

function f(x){
    alert(x);
}

function delay(func, ms){

    return function(x) {
        setTimeout(func, ms, x);
    };
}

let f1000 = delay(f, 1000);
let f5000 = delay(f, 5000);

f1000("test"); // shows "test" after 1000ms
f5000("test"); // shows "test" after 5000ms