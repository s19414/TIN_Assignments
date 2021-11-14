var arg = "Hello welcome to DoTA";
console.log("Longest word in string \"" + arg + "\" is: " + longestWord(arg));

function longestWord(argString) {
    var wordArray = argString.split(" ");
    var result = wordArray[0];
    for (var i = 1; i < wordArray.length; i++) {
        if (result.length < wordArray[i].length) {
            result = wordArray[i];
        }
    }
    return result;
}
