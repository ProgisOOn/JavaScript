"use strict";
/* Map
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count. */

let map = new Map();

map.set('1', 'str1')
    .set(1, 'num1')
    .set(true, 'bool1');

// alert(map.get(1));
// alert(map.get('1'));
// alert(map.size);

let John = {name: 'John', age: 15};
map.set(John, 1000);
// alert(map.get(John));


let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50],
]);

// for (let vegetable of recipeMap.keys()) {
//     alert(vegetable);
// }

// for (let amount of recipeMap.values()) {
//     alert(amount);
// }

// for (let entry of recipeMap) {
//     alert(entry)
// }

recipeMap.forEach ((key,value,map) => {
    // alert(`${value}: ${key}`);
});

let obj = {
    name: 'John',
    age: 30
};

let outMap = new Map(Object.entries(obj));

// alert(outMap.get('name'));


let prices = Object.fromEntries([
    ['banana', 1],
    ['orange',2],
    ['meat', 4],
]);

// alert(prices.banana)

let mapPrices = new Map();
mapPrices.set('banana', 1);
mapPrices.set('orange', 2);
mapPrices.set('meat', 4);

let plainObj = Object.fromEntries(mapPrices.entries());

// alert(plainObj.orange);

/* A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count. */


let set = new Set();

let john = {name: 'John'};
let pete = {name: 'Pete'};
let mary = {name: 'Mary'};

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
// alert(set.size);

for (let user of set) {
    // alert(user.name);
}

let newSet = new Set(["oranges","bananas", "apples"]);

newSet.forEach((value,valueAgain, set) => {
    // alert(value);
});


function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) ); // Hare, Krishna, :-O




function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // split the word by letters, sort them and join back
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  alert( aclean(arr) );