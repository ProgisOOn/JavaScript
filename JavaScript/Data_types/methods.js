/* The string str is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like toUpperCase().
That method runs and returns a new string (shown by alert).
The special object is destroyed, leaving the primitive str alone. */

"use strict";

let str = "hello!";
alert(str.toUpperCase());


let num = 1.3242313141;
alert(num.toFixed(1));
