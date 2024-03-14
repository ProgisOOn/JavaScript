"use strict";

let value = true;

alert(typeof value);
value = String(value);
alert(typeof value);


alert(typeof num);

let nubmer = Number(num)

alert(typeof nubmer);



let str = "an arbitrary string instead to a number"

let num = Number(str);
alert(num);

// numeric convertasion rules

alert(Number("   123   ")); // 123
alert(Number("123z")); // NaN
alert(Number(true)); // conversation returns 1
alert(Number(false)); // conversation return 0

alert(Number(null)); // conversation returns 0
alert(Number(undefined)); // NaN

alert(Boolean(0));
alert(Boolean(""));
alert(Boolean(NaN));
alert(Boolean(null));
alert(Boolean(undefined));

alert(Boolean(1));
alert(Boolean("HelcomeWithout"));
alert(Boolean(23));
alert(Boolean(" "));
alert(Boolean("0"));

// The three most widely used type conversions are to string, to number and to Boolean
