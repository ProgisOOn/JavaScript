"use strict";
//variables are local!!
// like at python
// function showMessage() {
//     let greating = "Hello,world!"
//     alert(greating);
// }

// let John = 'John';
// // full access to outer variables
// function JohnGreatig() {
//     let hello = 'Hello, ';
//     let John = 'Bob' // if you omit let function will take outer variable
//     alert(hello + John + '!');
// }

// JohnGreatig();
// alert(John);

//               CODE WITH PARAMETERS!!!!

// function fromMessage(from, message = 'No text given') {
//     from = "*"+from+"*";
//     alert(from + ': ' +message);
// }

// fromMessage('Ann', 'Hello!');
// fromMessage('Father', 'Buy milk!');
// fromMessage("Dimka");

// function smth(testValue) {
//     if (testValue == undefined) {
//         testValue = "Unknown";
//     }
//     alert(testValue);
// }

// function smth2(testValue) {
//     testValue = testValue || 'Unknown'
//     alert(testValue);
// }

// smth2();
// smth2('ssdsa');

// function checkAge(age = 0) {
//     // return (age>=18) ? true: confirm("Do you have permission from parents?");
//     return age>=18 || confirm("Do you have permission from parents?");
// }


// let age = prompt('How old are you?', 18);

// if (checkAge(age)) {
//     alert('Access granted');
// } else {
//     alert('Access denied');
// }

// function min(v1,v2) {
//     return (v1>v2) ? v2:v1;
// }

// alert(min(2,5) == 2);
// alert(min(10,-2)==-2);
function pow(value,times){
    let sum = value;
    times--;
    while (times) {
        sum *=value;
        times--;
    } 

    return sum;

}

alert(typeof pow);