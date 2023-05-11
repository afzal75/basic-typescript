"use strict";
function reverseArray(...param) {
    return param.reverse();
}
const myArray = reverseArray("hello", "world", "how", "are", "you");
console.log(myArray);



// function reverseArray<T>(...args: T[]): T[] {
//     return args.reverse();
//   }
//   const myArray = reverseArray("hello", "world", "how", "are", "you");
//   console.log(myArray);
// const myArray: number[] = [1, 2, 3, 4, 5];
// const reversedArray: number[] = myArray.reverse();
// // console.log(myArray); // Outputs [1, 2, 3, 4, 5]
// console.log(reversedArray); // Outputs [5, 4, 3, 2, 1]
// function reverseArray<T>(...array: T[]): T[] {
//   const reversedArray: T[] = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     reversedArray.push(array[i]);
//   }
//   return reversedArray;
// }
// const fruits = ['apple', 'banana', 'orange'];
// const reversedFruits = reverseArray(...fruits);
// console.log(reversedFruits); // Outputs ['orange', 'banana', 'apple']
