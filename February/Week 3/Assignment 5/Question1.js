function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[(len - 1) - i]) {
            return (document.write("False"));
        }
    }
    return (document.write("True"));
}

var word = prompt("Enter a word.\nWhole word should be in same case.");
var answer = checkPalindrome(word);