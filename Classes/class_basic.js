"use strict";

// class MyClass {
//     constructor() {

//     }
//     method1() {}
//     method2() {}
// }

// // new MyClass()

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         alert(this.name);
//     }
// }

// let Len = new User('Lena');
// Len.sayHi();


let User = class MyClass {
    sayHi() {
        alert(MyClass);
    }
};

new User().sayHi();

function makeClass(phrase) {
    return class {
        sayHi() {
            alert(phrase);
        }
    };
}

let user = makeClass("Hello");
new user().sayHi();