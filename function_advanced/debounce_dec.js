"use strict";

function general(x){
    alert(x);
}

function debounce(func) {
    let lastTimerId;

    return function(x) {
        clearTimeout(lastTimerId);
        func(x);
        lastTimerId = setTimeout(func,5000,'Bouncing');
    }
}

let func1 = debounce(general);
func1('Hello');
func1("Only after last function");
func1("you will see the bouncing");