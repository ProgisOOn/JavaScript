"use strict";

// let year =+prompt("In which year was ECMAScript-2015 specification published?",'Yestarday');
 
// if(year == 2015) alert('you are right');

//this gow we can execute one following code line after operator if(..) block
//if we need execute more complex things just wrap code block inside curly braces

// if(year != 2015) {
//     alert('you are wrong');
//     alert('try it again!');
// }

//but mostly use curly braces everywhere even if there is one statement inside
// Doing so improves readability

//falsy values --> 0, NaN, undefined,null, ""
//other values become true--> truthy values

// if(0) {// 0 is falsy
// }// code will never execute 
// // if has optional else block
// let cond;
// let year = prompt("In which year was ECMAScript-2015 specification published?",'Yestarday');
// cond = (year == 2015)
// if (cond) {
//     alert('you are right');
// } else {
//     alert('How could you have been so wrong?');
// }

//we can also checking several conditionals with else if

// if (year< 2015) {
//     alert('too early');
// } else if (year>2015) {
//     alert("too late");
// } else {
//     alert("Exactly!");
// }


// let accessAlowed;
// let age = prompt('How old arte you','');

// if ( age >= 18) {
//     accessAlowed = true;
// } else {
//     accessAlowed = false;
// }

// alert(accessAlowed);
// for this condition we have one and only ternary operator in JavaScripts

// let accessAlowed = (age >= 18) ? "yes":false;
//if condition is true operator return first value if it's false operator returns second value
//technically we can omit braces around expression cause the question maek operator has low precedence
// but parentheses make code more readable
// alert(accessAlowed);

// let age = prompt('age?', 18);

// let message = (age < 3) ? "Hi baby" :
//     (age < 18) ? "Hello!" :
//     (age < 100) ? "greatings!" :
//     "What an unusual age!";

// alert(message);

//sometimes it can be used as comparison to if blocks

// let company = prompt("Which comapny created JavaScript?",'');

// (company == 'Netscape') ? 
//     alert("Right!") : alert("Wrong.");

// but instead

// if (company == 'Netscape') {
//     alert('Right!');
// } else {
//     alert('Wrong');
// }

// let name = prompt('What is original for JavaScript','');

// if (name == 'ECMAScript') {
//     alert("Right!");
// } else {
//     alert('ECMAScript');
// } 

// let number = prompt('enter a number','');

// if (number>0) {
//     alert(1);
// } else if(number<0) {
//     alert(-1); 
// } else {
//     alert(0);
// }

// let result
// let a=2,b=2;
// result = a+b<4 ? "OVER": "BELOW";
// alert(result);

let message_two
let login = prompt('Who are you?', 'Employee');

message_two = (login=='Employee') ? "Hello!" :
    (login=='Director') ? "Gretings":
    (login == '') ? 'No login': '';

alert(message_two);