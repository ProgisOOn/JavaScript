let numbers = []

numbers = new Proxy(numbers, {
    set(target,prop,val) {
        if (typeof val == 'number') {
            target[prop] = val;
            return true;
        } else {
            return false;
        }
    }
});

numbers.push(1);
numbers.push(12);
alert(numbers.length);

numbers.push("test");

alert("isn't reached");