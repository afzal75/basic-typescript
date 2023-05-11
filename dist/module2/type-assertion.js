"use strict";
// assertion
let emni;
emni = 'Next level web development';
emni.length;
function kgTogram(params) {
    if (typeof params === 'string') {
        const value = parseFloat(params) * 1000;
        return `The converted value is: ${value}`;
    }
    if (typeof params === 'number') {
        const value = params * 1000;
        return value;
    }
}
const toBeNumber = kgTogram(1000);
const toBeString = kgTogram('1000');
try {
}
catch (error) {
    console.log(error.message);
}
