"use strict";

function work(a,b) {
    alert( a + b);
}

function spy(func){
   function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
   }

   wrapper.calls = [];

   return wrapper;
}


work = spy(work);

work(1, 2); // 3
work(4, 5); // 9


for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

// let array = [3,5,2];

// alert(array.join(',')); // 3,5,2