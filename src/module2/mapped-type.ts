const arrayOfNumbers = ["2","4","5"]
const stringOfNumbers = arrayOfNumbers.map((number) => number.toString())
console.log(stringOfNumbers);

type Volume = {
    height: number
    weight: number
    depth: number
}

type AreaString = {
    height: string
    weight: string
}

type areaReadonly = {
    height: number,
    weight: number
}

type Area<T> = {
    // [key in keyof Volume] : Volume[key] // looke up
[key in keyof T]: T[key]

}

const area1 : Area<{height: number, weight: number}> = {height: 44, weight: 44}

const rectangularArea : AreaNumber = {
    height: 10,
    weight: 22,
}
rectangularArea.weight = 20

type A = AreaNumber['height'] // lookup types
type B = keyof AreaNumber; // width / height