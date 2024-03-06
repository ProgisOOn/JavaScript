"use strict";

class User {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name
    }

    set name(value) {
        if(value.length < 4) {
            alert("Name is too short");
            return;
        }
        this._name = value;
    }


}   

let user = new User('John');
alert(user.name);
user.name = 'Kargo';
alert(user.name);

user = new User("");



