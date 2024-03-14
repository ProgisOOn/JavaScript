function* gen(seed) {
    let next = seed;
    for( let i = 1;i<1000;i++){
        next =next * 16807 % 2147483647;
        yield next;
    }
}

let generator = gen(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value);