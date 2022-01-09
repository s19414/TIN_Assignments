/*
a)Write a JS function that will convert temperatures between Celsius and Fahrenheit scales
(https://en.wikipedia.org/wiki/Fahrenheit) , 
taking input from a form on the page and printing output to a field on the same page.
Function should be invoked using HTML button.
*/
function calculateCelsius(fArg) {
    var result = (fArg - 32) * 5 / 9;
    result = result.toPrecision(4);
    document.getElementById("FtoCAnswerSpace").innerHTML = result;
    
}

function calculateFahrenheit(cArg) {
    var result = (cArg * 9 / 5) + 32;
    result - result.toPrecision(4);
    document.getElementById("CtoFAnswerSpace").innerHTML = result;
}