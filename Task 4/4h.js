// 2nd lowest and greatest
var numArray = [5, 2, 4, 7, 1];
var result = secondLowestGreatest(numArray);
console.log("In array " + numArray + ", second lowest and greatest are [" + result[0] + ", " + result[1] + "]");

function secondLowestGreatest(argArray) {
    var workArray = [];
    //copy array to avoid modifying argArray
    for (var i = 0; i < argArray.length; i++) {
        workArray[i] = argArray[i];
    }
    resultArray = [0, 0];
    resultArray[0] = workArray.sort(function (a, b) { return a - b })[1];
    resultArray[1] = workArray[workArray.length - 2];
    return resultArray;
}