class FormatterError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

let err = new FormatterError('formatting error');
alert(err.stack);