"use strict";

let billion = 1e9;
let ilbil = 7.3e9;
// alert(ilbil);

// e3 means 000 | e5 means 00_000

let mcs = 0.000001;
// alert(mcs);
mcs = 1e-6;
// alert(mcs);

let a = 0xff
let b = 0b11111111
let c = 0o377
// alert(c == b && a == c);

let count = 255;

// alert(count.toString()); // base is 10 decimal 
// alert(count.toString(16)); //hex number
// alert(count.toString(2)); // bit 
// alert(count.toString(36)); 
/* is the maximum, digits can be 0..9 or A..Z.
The whole latin alphabet is used to represent a number. 
A funny, but useful case for 36 is when we need to turn a 
long numeric identifier into something shorter, for example to
make a short url. Can simply represent it in the numeral system 
with base 36: */

// alert(123456..toString(36));

// two dots after digit
// (12345).toString also can be

// alert(Math.floor(-1.1)); // to lower value
// alert(Math.ceil(-1.9)); // to upper value
// alert(Math.round(3.4)); // normal rounding

// alert(Math.trunc(-1.324242)); // cut the float part
// toFixed() -> output is a string


//numbers has over weight

// alert((0.2).toFixed(20));
// alert(0.1 + 0.2 == 0.3);
// //BUT WE CAN SOLVE WITH TOGIXED

// alert(+(0.1 + 0.2).toFixed(2) == 0.3);
//// but it's a string we need to add unary +

// alert( 9999999999999999 );

// alert(isNaN(NaN));
// alert(isNaN("str"));

// alert( NaN === NaN);

// alert(isFinite("15"));
// alert(isFinite("sr23"));
// alert(isFinite(Infinity));

// alert(Number.isNaN(NaN));
// alert("str" / 2);

// alert(Number.isNaN("str"));
// alert(isNaN("str"));

// alert(Number.isFinite(123));
// alert(Number.isFinite(Infinity));
// alert(Number.isFinite(2/0));

alert(Number.isFinite('132'));
alert(isFinite("123"));
