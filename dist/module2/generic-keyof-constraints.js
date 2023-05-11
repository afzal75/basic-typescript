"use strict";
// const a : newType = "age"
// const b: newTypeUsingKeyOf = "address"
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({ name: 'mr. x', age: 100 }, 'age');
