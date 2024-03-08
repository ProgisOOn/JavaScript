let objectToString = Object.prototype.toString;

let arr = [ ];

alert(objectToString.call(arr));
alert(objectToString.call(123));
alert(objectToString.call('dsad'));
alert(objectToString.call(true));

let user = {
    [Symbol.toStringTag]: "User"
};

alert({}.toString.call(user));