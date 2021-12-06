/*
Create a prototype of a student object using initializer.
The object should contain an array with list of courses each student should take.
Write a function creating new objects based on this prototype,
setting their first and last name and id properties
 */

var Student = {
    firstName: "John",
    lastName: "Smith",
    id: 0,
    courseArray: ["Math", "Biology", "Chemistry", "Physics", "Ghanaian", "Marxism-Leninism", "Proto-Anarcho Pol-Potist Communism"]
}

function createStudent(_firstName, _lastName, _id) {
    var result = Object.create(Student);
    result.firstName = _firstName;
    result.lastName = _lastName;
    result.id = _id;
    return result;
}

var tommy = createStudent("Tommy", "Wisseau", 209);
console.log("New student is: " + tommy.firstName + " " + tommy.lastName + ". ID: " + tommy.id + ". He likes to study: " + tommy.courseArray[6]);