let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done"),1000);
});

let promiseError = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error('!Whoops')),1000);
});

promise.then(
    result => alert(result),
    error => alert(error)
);

promiseError.then(
    result => alert(result),
    error => alert(error)
);
