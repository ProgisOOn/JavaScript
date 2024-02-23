"use strict";

// how to declair array
// let arr = new Array();
// let arr2 = [];

// let fruits = ["Apple", "Orange", "Plum"];

// alert(fruits[2]);
// alert(fruits[1]);
// alert(fruits[0]);

// fruits[2] = "Pear";
// fruits[3] = "Lemon";

// alert(fruits.length);
// alert(fruits);


//ARRAY CAN STORE ANY SORT OF TYPES

// let arrt = ['Apple', { name: 'John'}, true, function() {alert('hello')} ];

// alert( arrt[1].name );
// arrt[3]();

// more readable

// let arrt_readable = [
//     "Apple",
//     "Orange",
//     "Plum",
// ];

// how to get it

// alert(arrt_readable[arrt_readable.length-1]);
// alert(arrt_readable.at(-1)); // same with arrt_readable[-1];

// identical

// arrays can be formed as stack, queue and this one structur for it
// that's why it's called "deque"

// LETS TRY THIS SHIT

// alert(fruits);
// alert( fruits.pop() );
// alert(fruits);

// fruits.push("Lemon");

// alert(fruits);

// alert( fruits.shift() );
// alert(fruits);
// fruits.unshift("Apple");
// alert(fruits);

// PERFORMANCE
// Methods push/pop run fast, while shift/unshift are slow

// HOW TO YCLE THE ARRAY

// for (let i = 0; i < fruits.length; i++) {
//     alert(fruits[i]);
// }

// BUT FOR ARRAYS THERE IS ANOTHER FORM OF LOOP
// for .. of

// for (let element_of_array of fruits) {
//     alert(element_of_array);
// }

// length is writtable

// alert(fruits);
// fruits.length = 2;
// alert(fruits);
// fruits.length = 4;
// alert(fruits[3]);

// fruits.length = 0;
// //array is cleared

// let arr2 = new Array(2); // is it [2]?
// alert(arr2[0]);
// alert(arr2.length); // it is 2 and it's tricky

// Store matrices

// let first_matrice = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];

// alert(first_matrice[1][1]);
// alert(String(first_matrice) == "1,2,3,4,5,6,7,8,9");

// let styles = ["Jazz", "Blues"]; alert(styles);
// styles.push('Rock-n-Roll'); alert(styles);
// alert(Math.trunc(styles.length/2));
// styles[Math.trunc(styles.length/2)] = 'Classics';  alert(styles);
// alert(styles.shift());  alert(styles);
// styles.unshift("Rap", "Reggae"); alert(styles);

// function summer(arr) {
//     let sum = 0

//     for ( let arra_element of arr) {
//         sum +=arra_element;
//     }
//     return sum;
// }
// let num;
// let arrOfNumbers = [];
// while(true) {
//     num = prompt("Enter a number",'');
//     if (num === null || String(Number(num)) == 'NaN' || num == ''){
//         alert(summer(arrOfNumbers));
//         break;
//     }

//     arrOfNumbers.push(+num);
// }2


// let input_arr = [1, -2, 3, 4, -9, 6]

function getMaxSubSum(arr) {
   let MaxSum = 0;
   let PartiapleSum = 0;

   for (let item of arr){
    PartiapleSum +=item;
    MaxSum = Math.max(MaxSum, PartiapleSum);
    if (PartiapleSum < 0) PartiapleSum = 0;
   }

   return MaxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0