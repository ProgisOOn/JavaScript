/* 
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
*/
"use strict";

// let user = {
//     name: 'John',
//     age: 30,
//     "likes birds": true
// };

// delete user.age;
// user.isAdmin = true;

// let key = "age";

// user[key] = 30;
//Dot notation wont work with key values


// let emptyUser = {};

// emptyUser["likes birds"] = true;

// alert(emptyUser["likes birds"])

// delete emptyUser["likes birds"];

// let fruit = prompt('Any fruit', 'apple');

// let bag = {
//     fruit,
//     count: 5,
// }

// alert(bag.fruit);

// function makeUser(name,age) {
//     return {
//         name,
//         age,
//         isAdmin: true,
//         children: 5,
//         wife: 'Marta',
//         car: "Chivrole",
//     };
// }

// let USer = makeUser('Oleg',25);


// for (let prop in USer) {
//     alert(`${prop} - ${USer[prop]}`);
// }

// let user = {};
// user.name = "John";
// user['surname'] = 'Smith';
// user.name = 'Pete';
// delete user.name;

// function isEmpty(obj) {
//     let i=0
//     for (let prop in obj) {
//         if (prop) i++;
//     }

//     return !(i>0);
// }

// alert(isEmpty(user));

// let empty ={};

// alert(isEmpty(empty));

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }

// let sum = 0;

// for (let prop in salaries) {
//     sum+=salaries[prop];
// }

// alert(sum);

let menu = {
    width: 200,
    hight: 300,
    title: "My menu",
}

function multipleNumeric(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === typeof 1) {
            obj[prop] *=2
        }
    }
}

multipleNumeric(menu);
