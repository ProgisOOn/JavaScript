"use strict";

// let user = {
//     name: 'Suize',
//     age: 15,
//     sayHi() {
//         alert(`Hello ${this.name} from user!`);
//     },
//     pol: 'female',
//     ref: this
// };

// alert(user.ref.name)
// user.sayHi();

//The value of this is the object
//“before dot”, the one used to call the method.

// let calculator = {
//     read() {
//         this.a = +prompt("enter a",15);
//         this.b = +prompt("enter b", 3);
//     },

//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a*this.b;
//     },

// }

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


let ladder = {
    step: 0,
    up() {
    //   up = this.up
      this.step++;
      return this;
    },
    down() {
    //   down=this.down 
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
  };

ladder
  .up()
  .up()
  .down()
  .showStep()
  .down()
  .showStep(); // shows 1 then 0