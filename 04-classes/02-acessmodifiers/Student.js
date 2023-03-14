var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Student.prototype, "firstName1", {
        get: function () {
            return this.firstName;
        },
        set: function (firstName) {
            this.firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "lastName1", {
        get: function () {
            return this.lastName;
        },
        set: function (lastName) {
            this.lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var myStudent = new Student("hello", "world");
console.log(myStudent.firstName1);
console.log(myStudent.lastName1);
myStudent.firstName1 = "a";
console.log(myStudent.firstName1);
