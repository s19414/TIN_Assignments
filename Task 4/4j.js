// binary search

var arrayArg = [2, 5, 8, 12, 16, 23, 38, 58, 72, 91];
var target = 12;
console.log("Target: " + target + " of array: " + arrayArg + "is in element: " + binarySearch(target, arrayArg));

function binarySearch(target, arrayArg) {
    var leftSide = 0;
    var rightSide = arrayArg.length - 1;
    while (leftSide != rightSide - 1) {
        var middleElement = Math.floor((leftSide + rightSide) / 2);
        console.log("Left and right: " + leftSide + ", " + rightSide + ". Middle element is: " + middleElement);
        //if target equal to middle element
        if (target === arrayArg[middleElement]) {
            return middleElement;
        }
        //if target larger than middle element
        else if (target > arrayArg[middleElement]) {
            leftSide = middleElement;
        }
        else {
            rightSide = middleElement;
        }
    }
    //if target is last or first element in array
    if (target === arrayArg[rightSide]) {
        return rightSide;
    }
    else if (target === arrayArg[leftSide]) {
        return leftSide;
    }
    //if target couldn't be found
    else {
        return "error";
    }
}
