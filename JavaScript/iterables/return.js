function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = gen();

alert(generator.next().value);
alert(generator.return("Bye").done);
alert(generator.return("yOu still here?").value);
alert(generator.next().done);