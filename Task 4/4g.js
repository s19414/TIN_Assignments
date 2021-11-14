//return type
var arg = 244;
var arg2 = "Cheese";
console.log("Type of " + arg + " is: " + returnType(arg));
console.log("Type of " + arg2 + " is: " + returnType(arg2));

function returnType(arg) {
    return typeof arg;
}
