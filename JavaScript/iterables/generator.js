function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = generateSequence();
// let one = generator.next();
// alert(JSON.stringify(one));

// let two = generator.next();

// alert(JSON.stringify(two));

// let three = generator.next();

// alert(JSON.stringify(three));
// alert(JSON.stringify(generator.next()));

// for (let value of generator) {
//     alert(value)
// }

let sequence = [0,...generateSequence()];

alert(sequence);

let range = {
    from:1,
    to:5, 

    *[Symbol.iterator]() {
        for(let value = this.from; value<=this.to;value++) {
            yield value;
        }
    }
};
for(let value of range) alert(value);
alert([...range]);