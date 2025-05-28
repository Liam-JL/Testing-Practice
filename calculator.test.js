import { calculator } from "./calculator";

describe ("add", () => {
    test ("2 + 2 = 4", () => {
        expect(calculator.add(2,2)).toBe(4)
    })

    test ("342 + 576 = 918", () => {
        expect(calculator.add(342,576)).toBe(918)
    })

    test ("a is not number", () => {
        expect(() => calculator.add("2", 2)).toThrow(new TypeError("Expected numbers but got string and number"));
    })

    test ("b is not number", () => {
        expect(() => calculator.add(2, "2")).toThrow(new TypeError("Expected numbers but got number and string"));
    })

    test ("both inputs not a number", () => {
        expect(() => calculator.add("cat", "dog")).toThrow(new TypeError("Expected numbers but got string and string"));
    })

    test ("no inputs throws error", () => {
        expect(() => calculator.add()).toThrow(new Error('Expected 2 numbers as arguments but received 0'));
    })

    test ("1 input throws error", () => {
        expect(() => calculator.add(2)).toThrow(new Error('Expected 2 numbers as arguments but received 1'));        
    })

    test ("negatives work", () => {
        expect(calculator.add(-1, 1)).toBe(0);
    })

    test ("floating points work", () => {
        expect(calculator.add(0.1, 0.2)).toBe(0.3);
    })
})