function sum(a, b) {
    return a + b;
}

function klonas(x) {
    return [...x];
}

function amzius(x) {
    if (x < 0) {
        throw Error();
    }
    return x * 365;
}

function string(text) {
    if (text === null) {
        throw Error('Text is null');
    }
    return text.split('').reverse().join('');
}

function isPalindrome(string) {
    if (string.split('').reverse().join('') === string) {
        return true;
    } else {
        return false;
    }
}

function isAnagram(word, original) {
    if (word.length !== original.length) return false;
    return word.split('').sort().join('') ===
        original.split('').sort().join('');
}

function factorialize(n) {
    if (n < 0) throw Error();
    if (n === 0) {
        return 1;
    } else {
        return (n * factorialize(n - 1));
    }
}

function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
    sum,
    klonas,
    amzius,
    string,
    isPalindrome,
    isAnagram,
    factorialize,
    fibonacci
};
