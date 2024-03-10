async function loadAsyncJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
         let json = await response.json();
         return json;
    } 
        throw new Error(response.status);
}

try {
    console.log(loadAsyncJson('./user.json'));
} catch(error) {
    alert(error);
}