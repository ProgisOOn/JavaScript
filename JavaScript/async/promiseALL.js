// Promise.all([
//     new Promise(resolve => setTimeout(()=>resolve(1),3000)),
//     new Promise(resolve => setTimeout(()=>resolve(2),2000)),
//     new Promise(resolve => setTimeout(()=>resolve(3),1000)),
// ]).then(alert);

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-server'
  ];

/*   let request_first = urls.map(user => fetch(user));
  Promise.all(request_first)
  .then(response => response.forEach(
    response => alert(`${response.url} : ${response.status}`)
  ));
 */



//   let names = ["iliakan", "remy", "jeresig"];

//   let request = names.map(name => fetch(`https://api.github.com/users/${name}`));
//   Promise.all(request)
//   .then(responses => {
//     for (let response of responses) 
//     {
//         alert(`${response.url} : ${response.status}`);
//     }
//   })

Promise.allSettled(urls.map(url => fetch(url)))
.then(results => {
    results.forEach((result,num) => {
        if (result.status == "fulfilled") {
            alert(`${urls[num]} : ${result.value.status}`);
        }
        if(result.status == "rejected") {
            alert(`${urls[num]} : ${result.reason}`);
        }
    });
});
