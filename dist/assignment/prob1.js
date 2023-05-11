"use strict";
// function repeatString(str: string, num: number = 3) {
//     for (let i = 0; i < num; i++) {
//         console.log(str);
//     }
// }
// repeatString('hello', 4)
function strMutu(str, time = 4) {
    const newStr = str.repeat(time);
    console.log(newStr);
}
strMutu('f', 5);
