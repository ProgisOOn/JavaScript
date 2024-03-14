class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }


    static get [Symbol.species]() {
        return Array;
    }
}

let arr = new PowerArray(2 , 4, 53, 32,32, 31, 56,3,3,12,42);

alert(arr.isEmpty())

let filteredArray = arr.filter(item => item >= 10);

alert(filteredArray.isEmpty());