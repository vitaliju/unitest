const { sum,
    klonas,
    amzius,
    string,
    isPalindrome,
    isAnagram,
    factorialize,
    fibonacci } = require("./sum");

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
    test('null string should throw an Error', () => {
        expect(() => {
            string(null);
        }).toThrow();
    });
});

describe('isPalindrome tests', () => {
    test('level is a palindrome', () => {
        expect(isPalindrome('level')).toBeTruthy();
    });
    test('apple is a palindrome', () => {
        expect(isPalindrome('apple')).toBeFalsy();
    });
    test('13531 is palindrome', () => {
        expect(isPalindrome('13531')).toBeTruthy();
    });
});

describe('isAnagram tests', () => {
    test('buckethead is anagram of deathcubek', () => {
        expect(isAnagram('buckethead', 'deathcubek')).toBeTruthy();
    });
    test('dumble is anagram of bumble', () => {
        expect(isAnagram('dumble', 'bumble')).toBeFalsy();
    });
    test('"" is anagram of bumble', () => {
        expect(isAnagram('', 'bumble')).toBeFalsy();
    });
    test('"" is anagram of ""', () => {
        expect(isAnagram('', '')).toBeTruthy();
    });

});

describe('factorialize tests', () => {
    test('count factorial of number', () => {
        expect(factorialize(5)).toBe(120);
    });
});

describe('fibonacci tests', () => {
    test('n of 10 should return 55', () => {
        expect(fibonacci(10)).toBe(55);
    });
});
