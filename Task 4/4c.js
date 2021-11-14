var arg1 = "notAPalindrome";
var arg2 = "KeK";
console.log("Is " + arg1 + " a palindrome?: " + isPalindrome(arg1));
console.log("Is " + arg2 + " a palindrome?: " + isPalindrome(arg2));


function isPalindrome(stringArg) {
    //if string has one letter
    if (stringArg.length === 1) {
        return true;
    }
    //if string has an odd length, remove middle letter
    if (stringArg.length % 2 !== 0) {
        var middleIndex = (stringArg.length - 1) / 2;
        stringArg = stringArg.substring(0, middleIndex) + stringArg.substring(middleIndex + 1, stringArg.length );
    }
    //could use toLowerCase() to make the function case insensitive, but ehh
    for (var i = 0, j = stringArg.length - 1; i < (stringArg.length / 2); i++, j--) {
        if (stringArg.charAt(i) !== stringArg.charAt(j)) {
            return false;
        }
    }
    return true;
    
}