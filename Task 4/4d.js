var arg = "cheeseguy";
console.log("Letters in \"" + arg + "\" sorted alphabetically is: " + alphabetSort(arg));
function alphabetSort(argString) {
    charArray = argString.split("");
    charArray = charArray.sort().reverse();
    
    var resultString = "";
    while (charArray.length !== 0) {
        resultString += charArray.pop();
    }
    return resultString;
}