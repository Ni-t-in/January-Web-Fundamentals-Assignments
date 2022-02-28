function anagram(word1, word2) {
    if (word1.length != word2.length) {
        return (document.write("Please enter the string of same length"));
    }
    else {
        var array1 = [];
        var array2 = [];
        var sortword1;
        var sortword2;
        array1 = word1.split("");
        array1.sort();
        sortword1 = array1.join("");
        array2 = word2.split("");
        sortarray2 = array2.sort();
        sortword2 = sortarray2.join("");

        if (sortword1 == sortword2) {
            return (document.write("True"));
        }
        else {
            return (document.write("False"));
        }
    }
}
var string1 = prompt("Enter first word.\nBoth word should be of same case");
var string2 = prompt("Enter second word.\nBoth word should be of same case");
var answer = anagram(string1, string2);