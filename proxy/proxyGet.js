let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adiós'
  };
  

dictionary = new Proxy(dictionary, {
    get(target, prop) {
        if (target[prop]) {
            return target[prop];
        } else {
            return "untranslated";
        }
    }
});

alert(dictionary['Hello']);
alert(dictionary['Psheprashem']);

