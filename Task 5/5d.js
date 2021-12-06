/*
Extend task B with getter for average grade property and 
getter and setter for student’s full name
 */

var student = studentConstructor("John", "Smith", 0, [1, 1, 1, 1]);
console.log("Student initialized to: " + student.getFullName() + " with average grade: " + student.getAvg());
student.setFullName("Herpy", "Derp");
console.log("Student's name modified to: " + student.getFullName());

function studentConstructor(_firstName, _lastName, _id, _gradeArray) {
    var student = {
        firstName: _firstName,
        lastName: _lastName,
        id: _id,
        gradeArray: _gradeArray,
        gradeAvg: function () {
            
            console.log("My name is: " + this.firstName + this.lastName + ". My grade average is: " + result / this.gradeArray.length);

        },
        getAvg: function () {
            result = 0;
            for (let i = [0]; i < this.gradeArray.length; i++) {
                result += this.gradeArray[i];
            }
            return result;
        },
        getFullName: function () {
            return this.firstName + " " + this.lastName;
        },
        setFullName: function (_firstName, _lastName) {
            this.firstName = _firstName;
            this.lastName = _lastName;
        }

    }
    return student;
}