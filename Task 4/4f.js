//is argument prime?
var arg = 15;
console.log("Is " + arg + " a prime number? " + isPrime(arg));

function isPrime(argNumber) {
    if (argNumber === 0) {
        return true;
    }
    if (argNumber % 2 === 0 || argNumber === 1) {
        return false;
    }
    for (var i = 3; i < argNumber/2; i += 2) {
        if (argNumber % i === 0) {
            return false;
        }
    }
    return true;
}