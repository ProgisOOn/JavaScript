"use strict";

function curry(f) { 
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  // usage
  function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = curry(sum);
  
  alert( curriedSum(1)(2) ); 
  alert( curriedSum(2)(4) );

//   function(a) {
//     return function(b) {
//       return f(a, b);
//     };
//   };

// return function(b) {
    //       return f(a, b);
    //     };
    //   };