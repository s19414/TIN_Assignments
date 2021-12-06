/*
 Implement a constructor function,
 creating objects representing students – 
 they should include first and last name, id, array with grades 
 (without subject names, just grades) ,
 a method printing first and last name and grade average of a student
 */

var student = studentConstructor("Harry", "Potter", 2, [5, 5, 5, 3]);
student.gradeAvg();

function studentConstructor(_firstName, _lastName, _id, _gradeArray) {
    var student = {
        firstName: _firstName,
        lastName: _lastName,
        id: _id,
        gradeArray: _gradeArray,
        gradeAvg: function () {
            result = 0;
            for (let i = [0]; i < this.gradeArray.length; i++) {
                result += this.gradeArray[i];
            }
            console.log("My name is: " + this.firstName + this.lastName + ". My grade average is: " + result / this.gradeArray.length);

        }
    }
    return student;
}