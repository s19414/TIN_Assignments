var x = 5;
var y = 4;
var recursiveFactorial = function factorial(x) { return x > 1 ? x * factorial(x - 1) : 1; };
console.log("Recursive factorial of " + x + ": " +
    recursiveFactorial(x) + "\niterated factorial of " + y + ": " +
    iteratedFactorial(y));

function iteratedFactorial(x) {
    var y = 1;
    while (x > 1) {
        y *= x;
        x--;
    }
    return y;
}