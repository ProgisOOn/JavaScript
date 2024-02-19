"use strict";

// let user = {
//     name: 'John',
//     money: 1000,

//     [Symbol.toPrimitive](hint){
//         alert(`hint: ${hint}`);
//         return hint == "string" ? `{name: "${this.name}"}` : this.money;
//     }
// };

// alert(user);
// alert(+user);
// alert(user + 500);


// let user = {
//     name: 'John'
// };


// alert(typeof user.toString());
// alert(typeof user.valueOf());
// alert(user.valueOf() === user);

let user = {
    name: 'John',
    money: 1000,

    toString() {
        return this.name;
    }

};

alert(user);
alert(+user);
alert(user + 500);

