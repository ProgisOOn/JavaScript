// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)),
//     new Promise(resolve => setTimeout(() => resolve(3), 1000)),
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)),
// ]).then(alert);


Promise.allSettled([
    Promise.reject(new Error("Whoops !")),
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
]).then(results => {
    for (let result of results) {
        if (result.status == 'fulfilled') {
            alert(`${result.status} : ${result.value}`);
        } else {
            alert(`${result.status} : ${result.reason}`);
        }

    }
});
