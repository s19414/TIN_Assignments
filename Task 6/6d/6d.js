/*
 d) Write a JS function that will add a row to HTML table based
 on contents of a form on the same page.
 Function should be invoked using HTML button.
 */
function calculatePower() {
    //get arg from document
    let base = document.getElementById("exponentArg").value;
    //get bases from document
    let cells = document.getElementById("firstRow").getElementsByTagName("th");
    //clear last row
    var table = document.getElementById("myTable");
    
    if (table.rows.length > 3) {
        table.deleteRow(-1);
    }

    var newRow = table.insertRow(-1);
    var exponentCell = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);
    var cell3 = newRow.insertCell(3);

    exponentCell.innerHTML = base;
    cell1.innerHTML = pow(base, cells[1].innerHTML);
    cell2.innerHTML = pow(base, cells[2].innerHTML);
    cell3.innerHTML = pow(base, cells[3].innerHTML);
}

function pow(base, exponent) {
    var result = 1;
    for (i = exponent; i > 0; i--) {
        result = result * base;
    }
    return result;
}