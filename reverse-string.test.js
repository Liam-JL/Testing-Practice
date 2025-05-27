import { reverseString } from "./reverse-string.js";

describe('reverseString', () => {
    test('"abc" to be "cba"', () => {
        expect(reverseString("abc")).toBe("cba");
    })

    test('"abcde" to be "edcba"', () => {
        expect(reverseString("abcde")).toBe("edcba");
    })

    test('"abcdefg" to be "gfedcba"', () => {
        expect(reverseString("abcdefg")).toBe("gfedcba");
    })

    test("caps ok", () => {
        expect(reverseString("aBc")).toBe("cBa");
    })

    test("Spaces ok", () => {
        expect(reverseString("I like trains")).toBe("sniart ekil I");
    })

    test("Numbers ok", () => {
        expect(reverseString("123")).toBe("321");
    })

    test("Non-string throws error", () => {
        expect(() => reverseString(123)).toThrow();
    })
})