// let range = {
//     from:1,
//     to:5,

//     *[Symbol.iterator]() {
//         for (let value = this.from;value<=this.to;value++) {
//             yield value;
//         }
//     }
// };

// for (let value of range) {
//     alert(value);
// }


async function* generateSequence(start,end) {
    for( let i = start; i<=end; i++) {
        await new Promise(resolve => setTimeout(resolve,1000));

        yield i;
    }
}

// (async () => {
// let generator = generateSequence(1,5);
// for await (let value of generator) {
//     alert(value);
// }
// })();
let gen = generateSequence(1,5);
alert(gen);
let result1 = gen.next();
result1.then(result => alert(result.value));