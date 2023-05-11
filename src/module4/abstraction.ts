// interface

// interface IVehcile{
//     name: string
//     model:string
// }

// const vehcile : IVehcile = {
//     name: 'Car',
//     model: '2000'
// }

interface IVehcile {
    startEngine(): void;
    stopEngine(): void
    move(): void
}

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

abstract class Vehcile  implements IVehcile {

    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) {
    }

    abstract startEngine(): void 
    abstract stopEngine(): void 
    move(): void {
        console.log('I am moveing Engine')
    }

}

class Car extends Vehcile{
    startEngine(): void {
        console.log('kkkfkk')
    }
    stopEngine(): void {
        console.log('kfkjfjfj')
    }
}

// const car1 = new Vehcile('Car', 'Honda', 2000)