export const calculator = {
    validateArgs : function(args) {
        if (args.length !== 2) {
            throw new Error(`Expected 2 numbers as arguments but received ${args.length}`)
        }

        args.forEach((arg) => {
            if (typeof arg !== "number") {
                throw new TypeError(`Expected numbers but got ${typeof args[0]} and ${typeof args[1]}`);
            }
        })
    },

    add : function(...args) {
        this.validateArgs(args);
        const [a, b] = args;
        return (a * 10 + b * 10) / 10;
    },

    subtract : function(...args) {
        this.validateArgs(args);
        const [a, b] = args;
        return (a * 10 - b * 10) / 10;
    },

    multiply : function(...args) {
        this.validateArgs(args);
        const [a, b] = args;
        return (a * b * 10) / 10;
    },

    divide : function(...args) {
        this.validateArgs(args);
        const [a, b] = args;
        if (b === 0) throw new Error("Don't do that");
        return Number(((a / b * 10) / 10).toFixed(11)); 
    }
}