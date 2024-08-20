const { sum, klonas, amzius, string, isPalindrome } = require("./sum");

describe("Sum tests", () => {
    test("adds 1 + 1 to equal 2", () => {
        expect(sum(1, 1)).toBe(2);
    });

    test("adds 1 + 2 to equal 3", () => {
        expect(sum(1, 2)).toEqual(3);
    });
});

describe("Klonas tests", () => {
    test("array should be cloned", () => {
        let x = [1, 2, 3];
        expect(klonas(x)).not.toBe(x);
    });

    test("array should contain the same elements", () => {
        expect(klonas([1, 2, 3])).toEqual([1, 2, 3]);
    });
});

describe("Amzius tests", () => {
    test("age of 1 should return 365 days", () => {
        expect(amzius(1)).toBe(365);
    });

    test("negative age should return an error", () => {
        const fun = () => {
            amzius(-1);
        };
        expect(fun).toThrow();
    });
});

describe('String tests', () => {
    test('Labas reverse to equal sabaL', () => {
        expect(string('Labas')).toBe('sabaL');
    });
});

describe('isPalindrome tests', () => {
    test('text is palindrome', () => {
        expect(isPalindrome('level')).toBe('level');
    });
});
