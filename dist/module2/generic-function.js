"use strict";
// // array function
// const createArray = (param: string): string[] => {
//     return [param]
// }
// // const createArray1 = <T>(param: T): T[] => {
// //     return [param]
// // }
// const createArray1 = <X, Y>(param1: X, param2: Y): [X, Y] => {
//     return [param1, param2]
// }
// // normal function
// function createArray3<X, Y>(param1: X, param2: Y): [X, Y] {
//     return [param1, param2]
// }
// const result = createArray1<string, number>('BBBBB', 55)
// const result2 = createArray1<boolean, [string]>(true, ['UUU'])
// // type alias
// type Results = {
//     name: string,
//     age: number
// }
// // // interface
// // interface Result {
// //     name: string, 
// //     age: number
// // }
// const result3 = createArray1<Results, number>({
//     name: 'jjj',
//     age: 44
// },
//     55
// );
// // spread operator
// // const newData = {...myInfo, crush} 
// const addMeInMyCrush = <I>(myInfo: I) => {
//     const crush = 'LLLLLLLLLLLLL'
//     const newData = { ...myInfo, crush }
//     return newData;
// }
// const myInfo = {
//     name: 'KKK',
//     age: 44,
//     salary: 44444
// }
// const result5 = addMeInMyCrush(myInfo)
