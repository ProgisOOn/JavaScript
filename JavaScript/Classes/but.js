class Button {
    constructor( value){
        this.value = value;
    }

    click = () => {
        alert(this.value);
    }
}
let button = new Button('clicked');

setTimeout(button.click, 1000);