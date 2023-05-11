// class Parent {
//     name: string;
//     age: number;
//     address: string;

//     constructor(name: string, age: number, address: string) {
//         this.name = name,
//             this.age = age,
//             this.address = address

//     }

//     makeSleep(hours: number) {
//         return `This ${this.name} will sleep for ${hours}`
//     }
// }


// class Student extends Parent {
//     constructor(name: string, age: number, address: string) {
//         super(name, age, address)
//     }
// }

// const student1 = new Student('DDD', 17, 'Dhaka');


// class Teacher extends Parent {
//     // name: string;
//     // age: number;
//     // address: string;
//     designation: string

//     constructor(name: string, age: number, address: string, designation: string) {
//         super(name, age, address)
//         // this.name = name,
//         //     this.age = age,
//         //     this.address = address,
//         this.designation = designation
//     }

//     // makeSleep(hours: number): string {
//     //     return `This ${this.name} will sleep for ${hours}`
//     // }

//     takeClasses(numberOfClass: number): string {
//         return `This ${this.name} will take ${numberOfClass}`
//     }
// }

// const teacher1 = new Teacher('JJJ', 62, 'USA', 'Proffessor')