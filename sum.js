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
    return text.split('').reverse().join('');
}

function isPalindrome(string) {
    if (string.split('').reverse().join('') === string) {
        return true;
    } else {
        throw Error();
    }
}

function isAnagram(word, original) {
    if (word.split('').sort().join('') ===
        original.split('').sort().join('')) {
        return true;
    } else {
        throw Error();
    }

}

module.exports = {
    sum,
    klonas,
    amzius,
    string,
    isPalindrome,
    isAnagram
};
