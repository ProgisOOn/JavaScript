"use strict";
 

// let idAgain = Symbol.for('name');

// alert(Symbol.keyFor(id));
// alert(Symbol.keyFor(idAgain));
let id = Symbol('id');

let user = {
    name: 'John',
    [id]: 123,
    age:158,
};

alert(Reflect.ownKeys(user));
// let clone = Object.assign({}, user);
// alert(clone[id]);

// for (let key in user){
//     alert(key);
// }


// let globalSymbol = Symbol.for('name');
// let localSymbol = Symbol('name');

// alert(Symbol.keyFor(globalSymbol));
// alert(Symbol.keyFor(localSymbol));

// alert(localSymbol.description);



