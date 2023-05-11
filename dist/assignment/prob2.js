"use strict";
function filterAdults(arr) {
    return arr.filter(person => person.age >= 18);
}
const people = [
    { name: 'Alice', age: 10 },
    { name: 'Blice', age: 25 },
    { name: 'Clice', age: 2 },
    { name: 'Ylice', age: 20 },
    { name: 'Bob', age: 18 },
    { name: 'Charlie', age: 30 },
];
const adults = filterAdults(people);
console.log(adults); // [{ name: 'Alice', age: 20 }, { name: 'Charlie', age: 30 }]
