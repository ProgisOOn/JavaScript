"use strict";

// how to declair array

let arr = new Array();
let arr2 = [];

let fruits = ["Apple", "Orange", "Plum"];

// alert(fruits[2]);
// alert(fruits[1]);
// alert(fruits[0]);

fruits[2] = "Pear";
fruits[3] = "Lemon";

// alert(fruits.length);
// alert(fruits);


//ARRAY CAN STORE ANY SORT OF TYPES

let arrt = ['Apple', { name: 'John'}, true, function() {alert('hello')} ];

alert( arr[1].name );