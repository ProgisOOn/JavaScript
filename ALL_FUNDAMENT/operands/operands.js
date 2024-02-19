"use strict";

//  5 * 2 -- in this case * -> this is operator 5 and 2 both are operands

let my= "my",
    string = "string";

alert(my + " " + string);

// Note that if one of the operands is string the other one will convert into a string too
alert(1 + '2');
alert('1'+ 2);

//but at the same time

alert(2+2+'2'); //will show 42 not as well

alert('1'+2+2); //but this is 122 not 14

//The binary operator + is the only operator which supports strings in such a way  

alert(6 - '2');
alert('6' / '3');

let firstType;

firstType = "Unary operator like following once";

let negation = "-" //minus

let x=1;
x = -x;
alert(x);

let secondType;

secondType = "Binary operator which has two operands"

// minus exist in binary form as well

let y = 2;

alert(x -y);

let listOfSupportedOperatos;

listOfSupportedOperatos = "+ - Addition - - Subtraction * - Multiplication / - Division % - Remainder ** - exponentiation"

alert(5 % 2);
alert(49 % 24);
alert(2 ** (1/2));
alert(8 ** (1/3));
alert(9 ** 9)