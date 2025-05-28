export const calculator = {
    enforceArgsAmount : function(args) {
        if (args.length !== 2) {
            throw new Error(`Expected 2 numbers as arguments but received ${args.length}`)
        }
    },

    add : function(a, b) {
        if (!a || !b) {
            throw new Error(`Expected 2 numbers as arguments but received ${Number(!!a) + Number(!!b)}`)
        }

        if (typeof(a) !== "number" || typeof(b) !== "number") {
            throw new TypeError(`Expected numbers but got ${typeof a} and ${typeof b}`);
        }

        return (a * 10 + b * 10) / 10;
    },

    subtract : function(a, b) {
        if (!a || !b) {
            throw new Error(`Expected 2 numbers as arguments but received ${Number(!!a) + Number(!!b)}`)
        }

        if (typeof(a) !== "number" || typeof(b) !== "number") {
            throw new TypeError(`Expected numbers but got ${typeof a} and ${typeof b}`);
        }

        return (a * 10 - b * 10) / 10;
    },

    multiply : function(...args) {
        this.enforceArgsAmount(args);

        const [a, b] = args;

        if (typeof(a) !== "number" || typeof(b) !== "number") {
            throw new TypeError(`Expected numbers but got ${typeof a} and ${typeof b}`);
        }

        return (a * b * 10) / 10;
    }
}