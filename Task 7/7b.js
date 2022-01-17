/*
Write a nodejs script that watches directory supplied as a parameter and
prints out contents of files that are modified to console.
Use https://nodejs.org/api/fs.html to learn about the fs module methods,
pay attention to the watch method
 */

let fs = require('fs');

const directory = process.argv[2];

fs.watch(directory, (eventType, filename) => {
    if (eventType === 'rename') {
        console.log(filename + " has been renamed.");
    }
    if (eventType === 'change') {
        console.log(filename + " has undergone: " + eventType);
        fs.readFile(directory + "\\" + filename, (err, buff) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(buff.toString());
        });
    }
});