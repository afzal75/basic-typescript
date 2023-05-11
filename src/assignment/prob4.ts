class Persons {
    constructor(private names: string, private ages: number) {}
  
    getDetails(): string {
      return `Name: ${this.names}, Age: ${this.ages}`;
    }
  }
  
  class Student extends Persons {
    constructor(name: string, age: number, private grade: string) {
      super(name, age);
    }
  
    getGrade(): string {
      return `Grade: ${this.grade}`;
    }
  }
  const person = new Persons("John Doe", 25);
  console.log(person.getDetails()); // Output: Name: John Doe, Age: 25
  
  const student = new Student("Jane Smith", 20, "A");
  console.log(student.getDetails()); // Output: Name: Jane Smith, Age: 20
  console.log(student.getGrade()); // Output: Grade: A
    