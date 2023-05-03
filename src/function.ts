// normal function

function add(num1: number, num2: number = 10): number{
    return num1 + num2
}

add(2, 2);

// spread operator

const myFriend = ['hojh', 'jdj', 'fff'];
const myNewFriend = ['sss', 'ddd', 'www'];

const myBestFriend = {
    name: 'jfjfj',
    agexx: 44
}

const {agexx: agg} = myBestFriend;

const [bestFriend] = myFriend

console.log(agg)

myFriend.push(...myNewFriend)
// console.log(myFriend)

// rest parameter

// const greetFriend = (friend1: string, friend2: string, friend3: string): void => console.log(`Hi ${friend1}\n Hi ${friend2}\n Hi ${friend3}`)

const greetFriend = (...friends: string[]):void => friends.forEach((friend) => 
 console.log(`Hi ${friend}`))

greetFriend('kashem', 'hashem', 'nashem', 'ttd', 'ffddd')




// function addArrow(num1: number, num2: number): number {
//     return num1 + num2;
// }

// const arr = [1, 4, 6]

// const newArray = arr.map((e:number) => e*e)


// const person: {
//     name: string,
//     balance: number,
//     addBalance(money: number): void
// } = {
//     name: 'Mezba',
//     balance: 5,
//     addBalance (money: number) {
//         console.log(`My New balance is ${this.balance + money}`)
//     }
// }