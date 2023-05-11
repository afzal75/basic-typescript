"use strict";
class Persons {
    constructor(names, ages) {
        this.names = names;
        this.ages = ages;
    }
    getDetails() {
        return `Name: ${this.names}, Age: ${this.ages}`;
    }
}
class Student extends Persons {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getGrade() {
        return `Grade: ${this.grade}`;
    }
}
const person = new Persons("John Doe", 25);
console.log(person.getDetails()); // Output: Name: John Doe, Age: 25
const student = new Student("Jane Smith", 20, "A");
console.log(student.getDetails()); // Output: Name: Jane Smith, Age: 20
console.log(student.getGrade()); // Output: Grade: A
