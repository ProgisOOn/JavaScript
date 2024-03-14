"use strict";

// let seterTime = function (from, to) {
//     setTimeout()
// } 


// let seterInt = function (from, to) {
//     let current = from;

//   let timerId = setInterval(function() {
//     alert(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// }

// seterInt(2,5);

function printSetterOut(from, to) {
    let current = from;

    timreId = setTimeout( function run() {
        alert(current);
        if(current < to) {
            setTimeout(run, 1000);
        }
        current++;
    },1000)
}

printSetterOut(5,10);