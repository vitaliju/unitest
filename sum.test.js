const { sum,
    klonas,
    amzius,
    string,
    isPalindrome,
    isAnagram,
    factorial,
    fibonacci,
    isPrime } = require("./sum");

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
    test('empty string should return an empty string', () => {
        expect(string('')).toBe('');
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
    test('apple is not a palindrome', () => {
        expect(isPalindrome('apple')).toBeFalsy();
    });
    test('13531 is palindrome', () => {
        expect(isPalindrome('13531')).toBeTruthy();
    });
    test('null string is not palindrome', () => {
        expect(isPalindrome(null)).toBeFalsy();
    });

});

describe('isAnagram tests', () => {
    test('buckethead is anagram of deathcubek', () => {
        expect(isAnagram('buckethead', 'deathcubek')).toBeTruthy();
    });
    test('dumble is not anagram of bumble', () => {
        expect(isAnagram('dumble', 'bumble')).toBeFalsy();
    });
    test('"" is not anagram of bumble', () => {
        expect(isAnagram('', 'bumble')).toBeFalsy();
    });
    test('two empty strings are anagram', () => {
        expect(isAnagram('', '')).toBeTruthy();
    });

});

describe('factorial tests', () => {
    test('factorial of 5 should be 120', () => {
        expect(factorial(5)).toBe(120);
    });
    test('factorial of 0 should be 1', () => {
        expect(factorial(0)).toBe(1);
    });
    test('factorial of 1 should be 1', () => {
        expect(factorial(1)).toBe(1);
    });
    test('factorial of 2 should be 2', () => {
        expect(factorial(2)).toBe(2);
    });
    test('factorial of 10 should be 3.628.800', () => {
        expect(factorial(10)).toBe(3_628_800);
    });
    test('negative factorial should throw an Error', () => {
        expect(() => {
            factorial(-1);
        }).toThrow();
    });
});

describe('fibonacci tests', () => {
    test('n of 10 should return 55', () => {
        expect(fibonacci(10)).toBe(55);
    });
    test('n of 1 should return 1', () => {
        expect(fibonacci(1)).toBe(1);
    });
    test('n of 3 should return 2', () => {
        expect(fibonacci(3)).toBe(2);
    });
    test('n of -1 should throw an Error', () => {
        expect(() => {
            fibanocci(-1);
        }).toThrow();
    });
});

describe('isPrime tests', () => {
    test('1 is prime number', () => {
        expect(isPrime(1)).toBeFalsy();
    });
    test('2 is prime number', () => {
        expect(isPrime(2)).toBeTruthy();
    });
    test('8 is not prime number', () => {
        expect(isPrime(8)).toBeFalsy();
    });
    test('31 is prime number', () => {
        expect(isPrime(31)).toBeTruthy();
    });
    test('403 is not prime number', () => {
        expect(isPrime(403)).toBeFalsy();
    });
});
