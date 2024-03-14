"use strict";

// Comparison like isinstance in python
// alert(Object.is("я СТРОА","я СТРОКА") === false);

// alert(parseInt('12$'));
// alert(parseFloat('13.145px'));

// alert(parseInt('14.5242px'));
// alert(parseFloat('85hex'));

// alert(parseFloat('sda321'));
// alert(parseInt('sd321'))

// alert(Math.random());
// alert(Math.random());
// alert(Math.random());
// alert(Math.random());
// alert(Math.random());
// alert(Math.random());

// alert(Math.max(3,5,-2,4,51,42,-31,-42,-53,-17,32,423,2,5,34));
// alert(Math.min(3,5,-2,4,51,42,-31,-42,-53,-17,32,423,2,5,34));
// alert(Math.pow(2,10));

// let firstNumber = +prompt('Enter number','');
// let secondNumber = +prompt('Enter number','');

// alert(firstNumber+secondNumber);

// alert((6.35 * 10).toFixed(0) / 10);
// alert(3.45.toFixed(1));



function readNumber(){
    let num;

    do {
        num = prompt('Enter number','');
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}

// alert(`Read: ${readNumber()}`);

let i = 0;

while (i != 10) {
    i  += 0.2;
    alert(i)
} 
