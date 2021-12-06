//Task D with classes

class Student {
    constructor(_firstName, _lastName, _id, _gradeArray) {
        this.firstName = _firstName;
        this.lastName = _lastName;
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

var student = new Student("Jeff", "Bezos", 19231, [5, 5, 5, 1, 3]);
student.printInfo();