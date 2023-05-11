"use strict";
function logString(param) {
    if (typeof param === 'string') {
        console.log(param);
    }
    else {
        console.error('Error: parameter is not a string');
    }
}
