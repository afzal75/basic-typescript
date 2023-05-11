// // generic interface

// interface CrushInterface<T, U = null> {
//     name: string,
//     husband: T,
//     wife?: U,
// }

// const crusho1: CrushInterface<boolean, string> = { name: 'ket', husband: true, wife: 'ddd' }
// const crusho2: CrushInterface<string, boolean> = { name: 'jjj', husband: "HHH", wife: true }

// interface CCCC {
//     name: string,
//     salary: number
// }

// const crusho3: CrushInterface<CCCC> = {
//     name: 'KKK', husband: {
//         name: 'JJJj',
//         salary: 4556
//     }
// }

// interface PersonInterface{
//     name: string,
//     age: number
// }


// const crusho4: CrushInterface<PersonInterface, PersonInterface> = {
//     name: 'lll',
//     husband: {
//         name: 'hhf',
//         age: 44
//     },
//     wife: {
//         name: 'ddss',
//         age: 33
//     }
// }










// // generic tuple

// type GenericTuple<X, Y> = [X, Y]

// // type RelationWithSelleryType = { name: string, sellery: number }

// interface RelationWithSelleryInterface {
//     name: string,
//     sellery: number
// }

// const RelationWithSellery: GenericTuple<RelationWithSelleryInterface, string> = [{
//     name: 'TRJ',
//     sellery: 1000000000000000,
// },
//     'GGG'
// ]

// const relation: GenericTuple<string, string> = ['TRJ', 'GGG']



// // generic type

// type GenericArray<T> = Array<T>


// const rollNumbers: GenericArray<number> = [22, 33, 44, 555, 66]
// const rollNumbers2: GenericArray<string> = ['22', '33', '44', '555', '66']
// const rollNumbers3: GenericArray<boolean> = [true, false]

// type NameRollType = { name: string, roll: number }

// const userNameAndRollNumbers4: GenericArray<NameRollType> = [
//     { name: 'Fhiom', roll: 2 },
//     { name: 'HJK', roll: 5 }
// ]