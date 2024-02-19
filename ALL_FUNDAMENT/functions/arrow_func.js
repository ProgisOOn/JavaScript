"use strict";
// the concise syntax of function expression
// let sum = (a,b) => a+b;
// alert(sum(1,2));

// let double = (a) => a*a;
// alert(double(5)); 

//parentheses are present even when there is no argument in there
// let age = prompt('Age?', 18);
// let sayHi = (age<18) ? () => alert('Hello'): () => alert('Greating');

// // arrow function require return if expression on the right side of => is enclosed in curle braces

// let Greeting = (age) => {
//     return (age<18) ? 'Hello': 'greeting';
// };

// alert(Greeting(age));

let ask = (question,yes,no) => confirm(question) ? yes():no();

let showNo = () => alert('Disagreed');
let showYes = () => alert('agreed');
ask('Do you agree?',showYes,showNo);