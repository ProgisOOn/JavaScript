"use strict";

function sum(value) {
  let current = value; 

  function f(b) {
    current +=b;
    return f;
  }

  f.toString = () => current;

  return f;
}

// function sum(a){
//     sum.current = (sum.current??0)+a;
//     sum.toString= ()=>sum.current;
//     return sum;
//     }
    

alert(sum(0)(1)(2)(3)(4)(5) == 15);