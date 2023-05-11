// // generic tuple

// type GenericTuple<X, Y> = [X, Y]

// // type RelationWithSelleryType = { name: string, sellery: number }

// interface RelationWithSelleryInterface {
//     name: string,
//     sellery:number
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