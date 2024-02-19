"use strict";

// let i = 0;

//loop while
// while (i <3) {
//     alert(i);
//     i++;
// }

//reverse loop
// while (i) alert(i--);

//loop do ... while we need when we want to execute loop at least once

// do {
//     alert(i)
//     alert("But I am still working")
// } while (i<0);

// let g = "Pidor";
// let response;
// for (;;) {
//     alert(g);
//     response = prompt("Are you pidor", 'Yes');
//     if (response == 'Yes') break;
// }
// alert('I know always');
// for ( let i = 0; i<3 ; i++ ) {
//     alert(i);
// }

// alert(i) -- issue not defined


// for(let i=1; i<=20; i++) {
//     if (i%2) {
//         continue;
//     }
//     alert(i);
// }


// Label: for(let i=0;i<3; i++) {
//     for (let g=0; g<3; g++) {
//         let input = prompt(`Value in coordinates ${i} : ${g}`, '');
//         if (!input) break Label;
//     }
// }

// let p=3;
// do{
//     alert(`Number ${--p}!`)
// } while (p);
let imput = prompt('Enter N', 10);

elder: for (let i=2; i<imput; i++ ) {
    for (let g=2; g<i; g++) {
        if (!(i%g)) {
            continue elder;
        }
    }
    alert(i);
}