export const calculator = {

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

    multiply : function(a, b) {
        if (!a || !b) {
            throw new Error(`Expected 2 numbers as arguments but received ${Number(!!a) + Number(!!b)}`)
        }

        if (typeof(a) !== "number" || typeof(b) !== "number") {
            throw new TypeError(`Expected numbers but got ${typeof a} and ${typeof b}`);
        }

        return (a * b * 10) / 10;
    }
}