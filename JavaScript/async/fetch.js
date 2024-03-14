fetch('./user.json')
.then(response => response.json())
.then(user =>  fetch(`https://api.github.com/users/${user.name}`))
.then(response => response.json())
.then(githubUser => new Promise(function(resolve, reject) {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    Image.className = 'promise-avatar-example';
    document.body.append(img);


    setTimeout(() => {
        img.remove();
        resolve(githubUser);
    },3000)
    }))
    .then(githubUser => alert(`Finished showing ${gtihubUser.name}`));
// .then( user => {
//     alert(user.name);
//     fetch(`https://api.github.com/users/${user.name}`)
// })
// .then(response => response.json())
// .then(gitHubUser => new Promise(function (resolve, reject) {
//     let img = document.createElement('img');
//     img.src = gitHubUser.avatar_url
// }))