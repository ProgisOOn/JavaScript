// there are 4 logical in JavaScript 
// || OR
// $$ AND
// ! NOT
// ?? Nulish coalescing

// let time = prompt('What is time',9);
// let isWeekend = false
// if (time<10 || time>18 || isWeekend) {
//     alert('Office is closed');
// }

// OR finds the first truthy value

// let firstName = 'Nikita';
// let lastName = 'Barandiy';
// let nickName = 'SuperHero';

// alert("Anonymous" && firstName && lastName && nickName);


//The importance of this feature in this
// let values = 25;
// alert(true)|| alert("not printed");
// false || alert("printed");

// if (1 && 1) {
//     alert("don't work")
// }
// let result = "23" && "sd" && 0;
// alert(result);
// && finds first falthy value


//I recomened use every cunstact for its purpose

// let resultf;

// resultf = !59
// alert(resultf)

//OPERATOR ! CONVERTS VALUE to boolean and returns inverse value

//double !! is sometimes used to converting a value to boolean

// alert(!!"not empty")
// alert(!!null)

// alert(alert(1) || 2 || alert(3));

// the precedence of && higher and it executes first but ! has higher precedence than others 

// let age = prompt("age?", 18);

// if ( age<14 || age>=90) {
//     alert("between 14 and 90");
// }

// let role = prompt("Who are you?", '');
// if (role == null){
//     alert('Cancled');
// } else if (role=='Admin') {
//     password = prompt("Password?",1234);
//     if (password == 1234) {
//         alert(`Welcome ${role} `)
//     } else if (password == null) {
//         alert("Canceled");
//     } else {
//         alert("Wrong password");
//     }
// } else {
//     alert('I dont know you');
// }

// let firstName = null;
// let secondName = null;
// let nickName = '';

// alert(firstName ?? secondName ?? nickName ?? "Anonymous")

// JavaScript forbids using ?? with either operators && or ||
// let x = 1 && 2 ?? 3; Syntax error