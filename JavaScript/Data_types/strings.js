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

let str = 'as sly as a fox, as strong as an ox';
let target = 'as';

// let pos = 0;

// while (true) {
//     let foundPosition = str.indexOf(target,pos);
//     if(foundPosition==-1) break;
//     alert(`Found at ${foundPosition}`);
//     pos = foundPosition + 1;
// }

// let pos = -1;

// while ((pos = str.indexOf(target,pos + 1)) != -1){
//     alert( pos );
// }

// I've understood why it is so large cunstruct in the example above
//let's examine it in the if expression

// if (str.indexOf(target) != -1) { //it doesn't work because it returns 0 position as the start of substring
//     alert('Yes, I Found'); // but if converts it like false
// } // we need explicitly compare with -1

// if position doesn't make sense
// alert("Widget".includes("id"));
// alert("Widget".includes("id", 3));
// alert("Widget".endsWith('get'));
// alert("Widget".startsWith('Wid'));





let justify = 'stringify';
// alert(justify.slice(0, 6));
// alert(justify.slice(5));

// alert(justify.slice(4));

// alert(justify.substring(2,6));
// alert(justify.substring(6,2));

// alert(justify.substr(-4,2))

// alert("Z".codePointAt(0).toString(16));
// alert("z".codePointAt(0));
// alert("z".codePointAt(0).toString(16));

// alert(String.fromCodePoint(90));
// alert(String.fromCodePoint(122));
// alert(String.fromCodePoint(0x5a));

let smatrstring = '';

for ( let i = 65; i <= 220; i++) {
    smatrstring += String.fromCodePoint(i);
}
// alert(smatrstring);
// alert('Zealand'.localeCompare('Österreich'));



let trimed_string = "           I'm a bit trimed                "
alert(trimed_string.length);
alert(trimed_string.trim().length);
alert(trimed_string.trim().repeat(3));

