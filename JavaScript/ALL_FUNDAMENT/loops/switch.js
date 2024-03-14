"use strict";

// let a = '2';
// let b=0;
// switch (+a) {
//     case b+1:
//         alert(`a is ${a}`);
//         break;
//     case b+2:
//         alert(`a is ${a}`);
//         break;
//     case b+3:
//         alert(`a is ${a}`);
//         break; 
// }

//grouping

// let a = 5;

// switch (a) {
//     case 1:
//         alert('No matter what');
    
//     case 3:
//     case 4:
//     case 5:
//         alert('Wrong!');
// }

// let browser = prompt("Browser?", 'Chrome');

// if (browser){
//     if (browser == 'Edge') alert("isn't supported");
//     else if (browser == 'Chrome') alert("supported");
//     else if (browser == 'Firefox') alert("supported");
//     else if (browser == 'Safari') alert("supported");
//     else if (browser == 'Opera') alert("supported");
//     else alert("I hope it will");
// }


let a = prompt('a?','');

switch(+a) {
    case 1:
        alert(1);
        break
    case 2:
    case 3:
        alert("2,3");
        break;
    default:
        alert(0);
}