(async ()=> {
    let response = await fetch('user.json');
    let user = await response.json();
    console.log(user)
})();