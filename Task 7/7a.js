/*
USAGE GUIDE
Example URL Formula for 4 + 4: localhost:5000/add?arg1=4&arg2=4
Example URL Formula for 2.4 * 10: localhost:5000/mul?arg1=2.4&arg2=4
 */

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(`<h1>USAGE GUIDE<br/>
Example URL Formula for 4 + 4: localhost:5000/add?arg1=4&arg2=4<br/>
        Example URL Formula for 2.4 * 10 :localhost:5000/mul?arg1=2.4&arg2=4<br/>
addition: add, subtraction: sub, multiplication: mul, division: div</h1>`);
        res.end();
    }
    else {
        //split url into important parts
        const splitArray = req.url.split('?');
        console.log(splitArray);

        var parameterArray = splitArray[1].split('&');
        console.log(parameterArray);

        parameterArray[0].replace("?", "");
        const arg1 = parameterArray[0].split("=")[1];
        const arg2 = parameterArray[1].split("=")[1];


        //if args are missing or wrong type
        if (arg1 === null || arg2 === null || !(arg1.match(/^\d+$/) || arg1.match(/^\d+\.\d+$/)) || !(arg2.match(/^\d+$/) || arg2.match(/^\d+\.\d+$/))) {
            console.log("Error");
            res.write('<h1>Error<h1>');
            res.end();
        }
        else if (splitArray[0] === "/add") {
            res.write('<h1>' + arg1 + " + " + arg2 + " = " + (parseFloat(arg1) + parseFloat(arg2)).toString() + '</h1>');
        }
        else if (splitArray[0] === "/sub") {
            res.write('<h1>' + arg1 + " - " + arg2 + " = " + (parseFloat(arg1) - parseFloat(arg2)).toString() + '</h1>');
        }
        else if (splitArray[0] === "/mul") {
            res.write('<h1>' + arg1 + " * " + arg2 + " = " + (parseFloat(arg1) * parseFloat(arg2)).toString() + '</h1>');
        }
        else if (splitArray[0] === "/div") {
            res.write('<h1>' + arg1 + " / " + arg2 + " = " + (parseFloat(arg1) / parseFloat(arg2)).toString() + '</h1>');
        }
        else {
            res.write("<h1>Error<h1>");
        }

        res.end();
    }
});

server.listen(5000);