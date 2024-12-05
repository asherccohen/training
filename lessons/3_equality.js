// How variables are compared?

// = DON'T CONFUSE WITH ASSIGNMENT
// == loose equality '1' == 1
// !=
// if()

// === strict equality
// !==

var isEqual = 'hey' === 'ho'; // false // compared by value
var isEqualObject = {} === {}; // false // compared by reference (pointer in memory)
var isEqualArray = [] === []; // false
var isEqualFunctions = myFunction === myFunction2; // false

// shallowComparison // function that checks every property of the object
var a = {};
var b = {};

b = a; // hook/link

b === a; // true
