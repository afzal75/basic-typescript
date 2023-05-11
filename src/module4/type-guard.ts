// key of guard

type Alphanumeric = string | number

function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString()
    }
}

add('1', '2')
add(1, 2)

// in Guard

type NormalUserType = {
    name: string,
}

type AdminUserType = {
    name: string,
    role: 'admin'
}

const normalUser1: NormalUserType = { name: 'vvv' }
const adminUser1: AdminUserType = { name: 'hhh', role: 'admin' }

function getUser(user: NormalUserType | AdminUserType): string {
    if ('role' in user) {
        return `I am an admin and my role is ${user.role}`
    }
    else {
        return `I am a normal user`
    }
}

console.log(getUser(normalUser1))
console.log(getUser(adminUser1))

class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name,
            this.species = species
    }
    makeSound() {
        console.log('I am making sound')
    }
}

class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeBark() {
        console.log('I am Barking')
    }
}

class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeMeaw() {
        console.log('I am Meawing')
    }
}

function isDog(animal: Animal): animal is Dog {
    return animal instanceof Dog
}

function getAnimal(animal: Animal) {
    if (isDog(animal)) {
        animal.makeBark()
    }
    else if (animal instanceof Cat) {
        animal.makeMeaw()
    }
    else {
        animal.makeSound()
    }
}



const animal1 = new Dog('German Shaperd', 'dog'); // dog er instance
const animal2 = new Cat('Sann Vai', 'cat')   // cat er instance

getAnimal(animal2)

