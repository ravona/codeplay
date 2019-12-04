"use strict";

/*
* Given a string of letters, return them sorted alphabetically
*/

let myString = "accbzbbdfe";

function sortStringAlphabetically(myString) {
    return myString.split('').sort().join('');
}

console.log(sortStringAlphabetically(myString));