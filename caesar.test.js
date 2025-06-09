import { caesarCipher } from "./caesar";

describe("ceasarCipher", () => {
    test("'julius caesar encrypts to 'mxolxv fdhvdu' if no shiftFactor supplied", () => {
        expect(caesarCipher("julius caesar")).toBe("mxolxv fdhvdu");
    })

    test("'marcus brutus' encrypts to 'pdufxv euxwxv' with no supplied shiftFactor", () => {
        expect(caesarCipher("marcus brutus")).toBe("pdufxv euxwxv");
    })

    test("'liam encrypts to 'oldp' with no shift key", () => {
        expect(caesarCipher("liam")).toBe("oldp");
    });

    test("'marcus crassus' encrypts to 'rfwhzx hwfxxzx' with shiftFactor of 5", () => {
        expect(caesarCipher("marcus crassus", 5)).toBe("rfwhzx hwfxxzx");
    });

    test("xyz 3 encrypts to abc", () => {
        expect(caesarCipher("xyz", 3)).toBe("abc");
    });
    
    test("'Case is maintained'", () => {
        expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    });

    test("Punctuation maintained", () => {
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
    })
})