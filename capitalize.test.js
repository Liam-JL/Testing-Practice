import { capitalize } from "./capitalize";

describe('capitalize', () => {
    
    test('cat to become CAT', () => {
        expect(capitalize("cat")).toBe("CAT")
    })

    test('dog to become DOG', () => {
        expect(capitalize("dog")).toBe("DOG")
    })

    test('mouse to become MOUSE', () => {
        expect(capitalize("mouse")).toBe("MOUSE")
    })

    test('CAPS stay CAPS', () => {
        expect(capitalize("DOG")).toBe("DOG")
    })

    test('Mixed case becomes uppercase', () => {
        expect(capitalize("DoG")).toBe("DOG");
    });

    test('Numbers are unaffected', () => {
        expect(capitalize("123")).toBe("123");
    });

    test('Symbols are unaffected', () => {
        expect(capitalize("!@#")).toBe("!@#");
    });

    test('Empty string returns empty string', () => {
        expect(capitalize("")).toBe("");
    });

    test('Non-string input throws error', () => {
        expect(() => capitalize(123)).toThrow();
    });
});


