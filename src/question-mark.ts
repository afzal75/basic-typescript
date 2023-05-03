const age: number = 3;

// if(age >= 23){
//     console.log("yes")
// }
// else{
//     console.log('kdsk')
// }


const isAdult = age >= 18 ? "yes" : "no"
// console.log(isAdult)

// nullish coalescing operator
// null and undifiend

const isAuthenticationUser = '';
const userName = isAuthenticationUser ?? "guest"
const userName2 = isAuthenticationUser ? isAuthenticationUser : "guest"
console.log({ userName }, { userName2 })


type Manus = {
    name: string,
    age: number,
    address: {
        city: "No City",
        road: "no road",
        home?: ''
    }
}


const manush1: Manus = {
    name: 'Manus',
    age: 199,
    address: {
        city: "No City",
        road: "no road"
    }
}

const home = manush1?.address?.home ?? 'No home'
console.log({ home })