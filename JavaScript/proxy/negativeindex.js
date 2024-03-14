let arr =[1,2,3];

function wrap(target) {
    return new Proxy(target, {
        get(target, prop) {
            if (prop < 0) {
                prop = Number(prop);
                while(prop < 0) {
                    prop = target.length + prop;
                }
                return target[prop];
            } else {
                return target[prop];
            }
        }
    });
}

arr = wrap(arr);    
alert(arr[-2]);
alert(arr[-1]);
alert(arr[-5]);
alert(arr[-6]);
