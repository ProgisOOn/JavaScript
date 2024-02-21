"use strict";

//coding in JavaScripts is UTF-16 for strings but it isn't tied to the page encoding

let singal = 'some text';
let double = "some text \n some text";
let backsticks  = `some text but only here
    I can add ${singal} from extend variables and
    write in several lines `;

// func`some expression` -- what is that?

let strsadasd = 'My\n';
// alert(str);
// alert(str[0]);
// alert(str.at(1));
// alert(str.at(2));
// alert(str.at(str.length -1));
// alert(str.at(-1));

//  only method at allow access to the negative positions
// The square brackets always return undefined for negative indexes

// YOU CAN ITERATE

// for (let char of "Hello") {
//     alert(char);
// }

// let obg = {
//     name:'dsa',
//     age:32,
//     descr:'I fdsadsaddsadsadsa'
// };

//  for (let smth in obg){
//      alert(smth);
//  }

// it doesn't work with of

// let me = 'Hello';

// alert(me.toLowerCase());
// alert(me.toUpperCase());
// alert(me);

// It doesn't change the string

// let strin = 'Widget with id';

// alert(strin.indexOf('Widget'));
// alert(strin.indexOf('widget')); //case-sensetive
// alert(strin.indexOf("id", 2));

// alert(strin.at(strin.indexOf("id",2)))

let str = 'As sly as a fox, as strong as an ox';
let target = 'as';

// let pos = 0;

// while (true) {
//     let foundPosition = str.indexOf(target,pos);
//     if(foundPosition==-1) break;
//     alert(`Found at ${foundPosition}`);
//     pos = foundPosition + 1;
// }

let pos = -1;

while ((pos = str.indexOf(target,pos + 1)) != -1){
    alert( pos );
}