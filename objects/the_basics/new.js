"use strict";

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User('Jack');

// alert(user.name);
// alert(user.isAdmin);


// check? "new" statement

// function User2(name) {
//     if (!new.target) {
//         return new User2(name);
//     }

//     this.name = name;
// }


// let john = User2('John');
// alert(john.name);

//Instead use new prior functionality




// function BigUser() {

//     this.name = "John";

//     return {name: "Godzillllla!!!"};
// }

// alert(new BigUser().name);


// function SmallUser() {
//     this.name = "John";

//     return;
// }
// let jzhon = new SmallUser;
// alert(jzhon.name);
// alert( new SmallUser().name);

// let obj = {};

// function A() {
//     return obj;
// }


// function B() {
//     return obj;
// }

// let a = new A;
// let b = new B;

// alert(a == b);

// function Calc() {
//     this.read = function() {
//         this.a = +prompt('a:',3);
//         this.b = +prompt('b:',14);
//     };

//     this.Sum = function() {
//         return this.a + this.b;
//     };

//     this.mul = function() {
//         return this.a* this.b;
//     };
// }

// let calc = new Calc;

// calc.read();
// alert(calc.Sum());
// alert(calc.mul());


// function Acalc(StartValue) {
//     this.StartValue = StartValue;
//     this.value = this.StartValue;

//     this.read = function() {
//         let a = +prompt("value", 5);
//         alert(this.value +=a);
//     };
// }

// let acalc = new Acalc(4);
// acalc.read();
// acalc.read();


function User(name) {
    this.name = name;

    this.AddStreet = function(){
        this.street = prompt('whats the street?','Pollyngton');
        alert(this.street);
    };

    this.AddNumber = function() {
        this.numbAr = +prompt('number?', 11);
        alert(this.numbAr);
    };
}

let user = new User('burkos');
user.AddStreet();
user.AddNumber();

alert(user.optiom?.house);
//check for existing



