"use strict";
var _a, _b;
const age = 3;
// if(age >= 23){
//     console.log("yes")
// }
// else{
//     console.log('kdsk')
// }
const isAdult = age >= 18 ? "yes" : "no";
// console.log(isAdult)
// nullish coalescing operator
// null and undifiend
const isAuthenticationUser = '';
const userName = isAuthenticationUser !== null && isAuthenticationUser !== void 0 ? isAuthenticationUser : "guest";
const userName2 = isAuthenticationUser ? isAuthenticationUser : "guest";
console.log({ userName }, { userName2 });
const manush1 = {
    name: 'Manus',
    age: 199,
    address: {
        city: "No City",
        road: "no road"
    }
};
const home = (_b = (_a = manush1 === null || manush1 === void 0 ? void 0 : manush1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'No home';
console.log({ home });
