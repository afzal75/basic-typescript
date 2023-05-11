"use strict";
// interface
// class Vehcile implements IVehcile {
//     constructor(
//         public name: string,
//         public brand: string,
//         public model: number
//     ) {
//     }
//     startEngine(): void {
//         console.log('I am starting Engine')
//     }
//     stopEngine(): void {
//         console.log('I am stoping Engine')
//     }
//     move(): void {
//         console.log('I am moveing Engine')
//     }
//     test() {
//     }
// }
// const vehcile1 = new Vehcile('Car', 'Toyota', 2000)
// abstract class
class Vehcile {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log('I am moveing Engine');
    }
}
class Car extends Vehcile {
    startEngine() {
        console.log('kkkfkk');
    }
    stopEngine() {
        console.log('kfkjfjfj');
    }
}
// const car1 = new Vehcile('Car', 'Honda', 2000)
