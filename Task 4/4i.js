//amount to coins
var coinsArray = [25, 10, 5, 2, 1];
var amount = 46;

console.log("Amount: " + amount + " in coins is: " + amountToCoins(amount, coinsArray));

function amountToCoins(amount, coinsArray) {
    coinsArray.sort(function (a, b) { return b - a });
    console.log(coinsArray);
    var resultArray = [];
    for (var i = 0; i < coinsArray.length; i++) {
        while (amount >= coinsArray[i]) {
            amount -= coinsArray[i];
            resultArray.push(coinsArray[i]);
        }
    }
    return resultArray;
}
