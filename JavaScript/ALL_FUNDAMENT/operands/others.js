"use strict";

/* let x=1;

alert(+x);

let y =-2;

alert(+y);

// + is the same with Number() but shorter
alert(+true);
alert(+'');
alert(+NaN)
alert(+undefined)

let apples = '2',
    oranges = '5';

    alert(+apples + +oranges);


//More complex expression

let a = 1,
    b = 2;

let c = 3 - (a = b + 1);

alert(a);
alert(c);


//Chaining assignments

let n,m,k;

n = m = k = 2+2;

alert(n);
alert(m);
alert(k);

// shortened expressions

let myN=5, myM=7;

myM +=3;
myN *=4

//SHORT "MODIFY-AND-ASSIGN" OPERATORS EXIST FOR ALL ARITHMETICAL AND BITWISE OPERATORS

//incresing or decreasing a numberby one 

let counter = 2;

counter++
counter--
// expression like 5++ occurs the error
alert(counter); */


//We can use expression like that
// 
// let Value = 1;
// let a = 30;
// a = (a + 5) * (25 - Value++) / Value;
// alert(a);


// let b;
// let board_count;
// let diverse;


// But the best case of using complex expressions to use single line for single action

// a += 5;
// b = Value++;
// board_count = 25 - b;
// diverse = board_count / Value;
// alert(a * diverse);

//bitwise operators

/* 
AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> ) */

// we have a such incredible operator as comma 
//comma has the lowest precedence lower than = 
//that's why parentheses are most important in this case 

// a = (1 + 2, 3 + 4) result will be a = 7 as having been written a = 3+4
//comma return only last expression to assign, others just will be thrown away
// for (a = 1, b = 3, c = a*b; a < 10; a++) {

// }

//this is use case of comma 
//as for a and b they don't influence on the expression, but they are needed in the rest of it and we can 
//declare them in the same line, frameworks use it
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 12