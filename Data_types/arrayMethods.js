"use strict";

let arrFirst = ['I', 'study', 'JavaScript'];

// arr.splice(0,3, "Let's", 'dance');
// arr.splice(2,0,'complex', 'language');
// alert(arr);

let numArr = [1,2,5];

// numArr.splice(-1,0,3,4);
// alert(numArr);

// let copyOne = numArr.slice();
// let secondCopy = copyOne.slice(-2,-1);
// alert(secondCopy);
// alert(typeof secondCopy);
// alert(numArr);
// alert(copyOne);

let numir = [1,2];

// alert(numir.concat(3,4));

// alert(numir.concat( [3,4], [5,6] ));

// alert(numir.concat( [3,4],5,6));

let arrayLike = {
    0:"something",
    length: 1
};

// alert(numir.concat(arrayLike));


//forEach

let posledovatelnost = ['Bilbo', 'Gandalf', "Nazgul"];
// posledovatelnost.forEach((item,index,array) => {
//     alert(`${item} in the position ${index} in ${array}.`);
// });

let arr = [1, 0, false];

// alert(arr.indexOf(0) );
// alert(arr.indexOf(false) );
// alert(arr.indexOf(null) );

// alert(arr.includes(1));

let fruits = ['Apple', 'Orange', 'Apple'];
// alert(fruits.indexOf('Apple'));
// alert(fruits.lastIndexOf('Apple'));

//includes can check for NaN insted to indexOf it can't

/* let nan = [NaN];

alert(nan.indexOf(NaN));
alert(nan.includes(NaN)); */

let users = [
    {id: 1, name:"John"},
    {id: 2, name:"Petter"},
    {id: 3, name:"Mary"},
];

let user = users.find(item => item.id == 1);
// alert(user.name);


let users2 = [
    {id: 1, name:"John"},
    {id: 2, name:"Petter"},
    {id: 3, name:"Mary"},
    {id: 4, name:"Katy"},
    {id: 5, name:"John"},
];

alert(users2.findIndex(item => item.name == 'John'));
alert(users2.findLastIndex(item => item.name == 'John'));


