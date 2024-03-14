async function f() {

    let promise = new Promise( resolve => {
        setTimeout(()=> resolve("done!"), 1000);
    });

    let result = await promise;

    alert(result);
}



async function showAvatar() {
    let response = await fetch('user.json');
    let user = await response.json();

    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
    let githubUserAvatar = await githubUser.avatar_url
    

    let img = document.createElement('img');
    img.src = githubUserAvatar;
    document.body.append(img);

    await new Promise((resolve,reject) => setTimeout(resolve, 3000));
    
    img.remove();
    return githubUser;
}

showAvatar();