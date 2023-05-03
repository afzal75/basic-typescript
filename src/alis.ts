type CrushType = {
    name: string,
    age?: number,
    proffession: string,
    address: string
}


const crush1: CrushType = {
    name: 'Moyna Pakhi',
    age: 44,
    proffession: 'Web Developer',
    address: 'Cumilla'
};

const crush2: CrushType = {
    name: 'Tia Pakhi',
    age: 24,
    proffession: 'Next Level Web Developer',
    address: 'Bumilla'
};

type crushMarriedType = boolean;

const isCrushMarried: crushMarriedType = false;

type courseNameType = string

const courseName: courseNameType = 'Next Level Web Development';


type OperationType = (x:number, y:number) => number;

const calculate = (
    number1: number,  //10
    number2: number,  //20
    operation: OperationType,  //(x, y) => x + y
    ) => {
    return operation(number1, number2)
}

calculate(10, 20, (x, y) => x + y)
calculate(10, 20, (x, y) => x * y)
calculate(10, 20, (x, y) => x / y)