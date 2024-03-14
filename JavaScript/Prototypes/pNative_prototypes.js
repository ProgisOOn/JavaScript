"use strict";

let obj = {};

// alert(obj.__proto__ === Object.prototype);
// alert( obj.toString === obj.__proto__.toString);
// alert(obj.__proto__ === Object.prototype);


let arr = [1, 2, 3];

alert(arr.__proto__ === Array.prototype);
alert(arr.__proto__.__proto__ === Object.prototype);
alert(arr.__proto__.__proto__.__proto__);

//All prototypes have Object.prototype on the top
//console.dir();

//Methods of these objects also reside in prototypes,
// available as String.prototype, Number.prototype and Boolean.prototype.

// Values null and undefined have no object wrappers

//Changing native prototypes
String.prototype.show = function() {
    alert(this);
};

"BOOM!".show();

let obj2 = {
    0:'Hello',
    1:'World',
    length: 2,
};

obj2.join = Array.prototype.join;

alert( obj2.join(','));

//We can only inherit from one object at a time
