function* gen() {
    let ask = yield "2 + 2 = ?";

    alert(ask);
}

let generator = gen();

alert(generator.next().value);


try {
    generator.throw(new Error("Fuck this shit"));
} catch(e) {
    alert(e);
}