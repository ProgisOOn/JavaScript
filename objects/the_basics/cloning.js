let user = {
    name: 'My name'
}

let clone = user;

clone.name = 'Falsy';

//To avoid such a behavior

let TruUser = {
    name: 'Suizy',
    age: 30,
    colorEye: 'Green',
}
let TruClone = Object.assign({}, TruUser);

TruClone.name = 'Grek';

let userWithObjInside = {
    name: 'Harbor',
    career: 'Developer',
    guns: {
        pistols: 19,
        rockets: 23,
        ak: 58,
    },
    time: "300s",
}

let cloneUserWithObj = Object.assign({}, userWithObjInside);

//Cloning doesn't work with biult-in objects


cloneUserWithObj = structuredClone(userWithObjInside);

// alert(cloneUserWithObj === userWithObjInside);// falsy

cloneUserWithObj.guns.ak = 2;
alert(userWithObjInside.guns.ak);

//There has never been any changes in userObject
//but it still can't copy functions we need to use other libraries