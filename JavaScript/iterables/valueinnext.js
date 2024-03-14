function* gen() {
    let ask1 = yield "2 + 2 = ?";

    alert(ask1);

    let ask2 = yield "3 * 3 = ?";

    alert(ask2);
}

let generator = gen();

alert(generator.next().value);

alert(generator.next(4).value);

alert(generator.next(9).done);