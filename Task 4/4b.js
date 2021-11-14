//nth number in fibonacci sequence
var n = 6;
console.log("Fibonacci " + n + " is: " + fibonacci(n));
function fibonacci(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else {
        var n1 = 0;
        var n2 = 1;
        var result = 0;
        for (var i = 1; i < n; i++) {
            result = n1 + n2;
            n1 = n2;
            n2 = result;
        }
        return result;
    }
}