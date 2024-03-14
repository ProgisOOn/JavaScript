"use strict";

// function sayHi() {
//     alert('Hello!');
// }

// let sayHiSecond = function() {
//     alert('Hello!');
// };

// sayHi();
// sayHiSecond();
// alert(sayHi)

// FUNCTION THAT USE OTHER FUNCTIONS

// function ask(question, yes, no) {
//     if (confirm(question)) yes() 
//     else no();
// }

// function showOK(){
//     alert('All Okay move on!');
// }

// function showCancel() {
//     alert('You canceled execution :(');
// }

// ask('Are you agree?', showOK, showCancel);

//Function Declarations available everywhere in the code, absolutely everywhere because of 
//JavaScript preperasions before executing the main code it prepares all functions 
// and compute it before the main part

// welcome();

// function welcome() {
//     alert('Welcome!')
// }

//it would work

//But function expressions available only when cursor reaches them not earlier


let age = prompt("age", 18);

// if (age<18){
//     welcome();
//     function welcome(){
//         alert("Hello under 18");
//     }
// } else {
//     welcome();
//     function welcome() {
//         alert('Hello elders!');
//     }
// }

//but functions in the block code exist only inside the block and can't be execute as outer function

let welcome = (age<18) ?
    function() { alert('Hello!');}:
    function() { alert('Greating!');};

welcome();