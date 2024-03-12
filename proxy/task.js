let user = {
    name: 'John',
}


function wrap(target) {
    return new Proxy(target, {
        get(target, prop) {
            if(target[prop]) {
                return target[prop];
            } else {
                throw new Error("No such property");
            }
        }
    });
}

user = wrap(user);

alert(user["name"]);
alert(user["age"]);