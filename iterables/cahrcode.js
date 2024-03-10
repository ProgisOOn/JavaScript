function* generateSequence(start,end) {
    for (let i = start; i<=end;i++) yield i;
}

function* generateCharSequences() {

    yield* generateSequence(48,57);

    yield* generateSequence(65,90);

    yield* generateSequence(97, 122);

}

let str = '';

for (let code of generateCharSequences()) {
    str += String.fromCharCode(code);
}

alert(str);
