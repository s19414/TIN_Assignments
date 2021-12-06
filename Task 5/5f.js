/*
Create class Person with first and last name,
as well as getter and setter for full name.
Rewrite Student class from task E to extend class Person
 */

class Person{
    constructor(_firstName, _lastName) {
        this.firstName = _firstName;
        this.lastName = _lastName;
    }
    get getName() {
        return this.firstName + " " + this.lastName;
    }

    setName(_firstName, _lastName) {
        this.firstName = _firstName;
        this.lastName = _lastName;
    }
}

class Student extends Person {
    constructor(_firstName, _lastName, _id, _gradeArray) {
        super(_firstName, _lastName);
        this.id = _id;
        this.gradeArray = _gradeArray;
    }
    printInfo() {
        var result = 0;
        for (let i = [0]; i < this.gradeArray.length; i++) {
            result += this.gradeArray[i];
        }
        console.log("My name is: " + this.firstName + " " + this.lastName + ". My grade average is: " + result / this.gradeArray.length);
    }
    get gradeAvg() {
        result = 0;
        for (let i = [0]; i < this.gradeArray.length; i++) {
            result += this.gradeArray[i];
        }
        return result;
    }
    get getName() {
        return this.firstName + " " + this.lastName;
    }

    setName(_firstName, _lastName) {
        this.firstName = _firstName;
        this.lastName = _lastName;
    }
}

var student = new Student("Herp", "Derp", 123145, [9, 2, 5, 3]);
student.printInfo();