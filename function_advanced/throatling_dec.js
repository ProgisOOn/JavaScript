"use strict";

function someActionPerTime(x) {
    console.log(x);
}

function throttle(func, ms) {

    function resetLastExecution() {
        wrapper.lastTreatment[0](wrapper.lastTreatment[1]);
        wrapper.lastExecution = false;

    }
    wrapper.lastExecution = false;
    wrapper.lastTreatment = function() {}
    function wrapper(x) {
        if(!wrapper.lastExecution){
            func(x);
            wrapper.lastExecution = true;
            setTimeout(resetLastExecution, ms);
        } else {
            wrapper.lastTreatment = new Array(func, x);
        }
    }

    return wrapper;
} 

let func1 = throttle(someActionPerTime, 1000);
func1('smth');
func1('safasfswafsafasf'); //false ignored
func1('not last');
func1('We need to execute once in spicif time');
func1('our case in 1000 millisecond')
func1('and execute last treatment if there was any more than');
func1('once per spicific time');