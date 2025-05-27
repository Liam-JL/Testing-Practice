//First hardcoded passes
function reverseString1(str) {
    if(str === "abcde") return "edcba"
    if(str === "abcdefg") return "gfedcba"
    return "cba"
}

//Refactor into generaized solution
function reverseString2(str) {
    if (typeof(str) !== "string") {
        throw new TypeError(`Input must be string`);
    }

    let reversedString = '';
    let counter = str.length - 1;

    while(counter > -1) {
        reversedString = reversedString.concat(str.charAt(counter));
        counter --;
    }

    return reversedString;
}

//Cleaner refactor
export function reverseString(str) {
    if (typeof(str) !== "string") {
        throw new TypeError(`Expected string but got ${typeof str}`);
    }

    return str.split('').reverse().join('');
}
