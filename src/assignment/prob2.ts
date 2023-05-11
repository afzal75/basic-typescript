interface Person  {
    name: string;
    age: number;
}

function filterAdults(arr: Person[]): Person[] {
    return arr.filter(person => person.age >= 18);
}

const people: Person[] = [
    { name: 'Alice', age: 10 },
    { name: 'Blice', age: 25 },
    { name: 'Clice', age: 2 },
    { name: 'Ylice', age: 20 },
    { name: 'Bob', age: 18 },
    { name: 'Charlie', age: 30 },
];

const adults: Person[] = filterAdults(people);

console.log(adults); // [{ name: 'Alice', age: 20 }, { name: 'Charlie', age: 30 }]

