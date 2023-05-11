"use strict";
const crush1 = {
    name: 'Moyna Pakhi',
    age: 44,
    proffession: 'Web Developer',
    address: 'Cumilla'
};
const crush2 = {
    name: 'Tia Pakhi',
    age: 24,
    proffession: 'Next Level Web Developer',
    address: 'Bumilla'
};
const isCrushMarried = false;
const courseName = 'Next Level Web Development';
const calculate = (number1, //10
number2, //20
operation) => {
    return operation(number1, number2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x * y);
calculate(10, 20, (x, y) => x / y);
