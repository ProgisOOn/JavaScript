"use strict";

let animal = {
    name: 'Anonymous animal',

    run() {
        alert(this.name +' ,run!');
    }
}

let kenguru = {
    name: 'Kenguru',
};

Object.getPrototypeOf(kenguru);
Object.setPrototypeOf(kenguru, animal);

kenguru.run();

let rabbit = Object.create(animal, {
    jumps: {
        value: true,
        writable: false,
    }
});
rabbit.run();
alert(rabbit.jumps);

//Cloning

let clone = Object.create(
    Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit)
);

alert(clone.jumps);


//Don't change [[Prototype]] of existing objects if speed matters

//That could surely be surprising for a non-developer, but pretty
// understandable for us.
// The __proto__ property is special: it must be either an object or null.
// A string can not become a prototype. That’s why an assignment a string
// to __proto__ is ignored.


let obj = Object.create(null);
//It's plain object, pure dictionary
/* Note that most object-related methods are Object.something(...),
like Object.keys(obj) – they are not in the prototype, so they will keep
working on such objects: */