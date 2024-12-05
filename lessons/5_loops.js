// Loops

// MUTABLE METHODS
var array = [1, 2, 3, 4];

var tempArray = [];

for (var index = 0; index < array.length; index++) {
  var element = array[index];

  // element = 0;
  // break;// performance optimization
  tempArray.push(element * 3);
}

console.log('tempArray', [3, 6, 9, 12]);

// array.forEach()

// for (const key in object) {
//   if (object.hasOwnProperty(key)) {
//     const element = object[key];

//   }
// }

// for (const iterator of object) {

// }

//Sort
var array = [1, 2, 3, 4];

const unstableSortedArray = array.sort();

const sortedArray = array.sort((a, b) => {
  if (a - b === 0) {
    return true;
  }

  return false;
});

// add element to array
array.push('new element'); // immutable counterpart const newArray = array.concat('new element)
// pop take first element of the array
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
animals.slice(2);
// slice take a part of it

// LOOK INTO array.prototype methods and find the mutable/immutable ones
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// IMMUTABLE METHODS
// add element
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const newAnimals = animals.concat('cat'); // ['ant', 'bison', 'camel', 'duck', 'elephant', 'cat]

// Transformation -> map
const multiply = (element) => {
  if (element === 0) {
    return element;
  }

  console.log('I am a side effect');
  return element * 3;
};

const subtract = (element, index, originalArray) => element - 1;

const tempArray = array.map(multiply); // performance can degrade depending on amount of elements
// const tempArray2 = tempArray.map(subtract)
const tempArray = array.map(multiply).map(subtract);

// Filtering -> filter
const isEven = (element, index) => {
  let toNumber;
  if (typeof element === 'string') {
    //  let toNumber = Number(element);
    return Number(element) % 2 === 0;
  }

  return toNumber % 2 === 0;
  // return true or false
};

const filteredArray = array.filter(isEven);
// const filteredArray = array.filter(isEven);

const myArray = [{ name: 'asher' }, { name: 'jason' }];

const isJason = (element) => element.name === 'jason';

const filteredArray = array.filter(isJason);

const filteredArray = array.every(isJason); // true
const filteredArray = array.some(isJason); // any is true

// Reduce
var array = [1, 2, 3, 4];
var obj = { 1: 1, 2: 2, 3: 3 };

const sumReducer = (accumulator, currentValue) => {
  return accumulator + currentValue;
};

const reducedArray = array.reduce(sumReducer, 0);
const reducedArray = array.reduce(sumReducer, []);
const reducedArray = array.reduce(sumReducer, {});

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedNames = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name]++; // allNames.name
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
// countedNames['Alice'];

// Flat/flatMap
// [[1, 2], [3,4]]
const tempArray = array.map(multiply).flat();

// Find
const element = array.find(
  (element) => element.id === '3874683748736847837486'
); // return undefined
element.name; // breaks

// looping objects
const obj = { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 };
// const newObject = object.keys()
const newObject = Object.keys(obj).map((key) => {
  const value = obj[key];

  return value;
}); // ['Alice', 'Bob', 'Tiff', 'Bruce']

const newObject2 = Object.values(obj).map();

const obj = { foo: 'bar', baz: 42 };
const newObject2 = Object.entries(obj); // [ ['foo', 'bar'], ['baz', 42] ]

const object = Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42],
]); // { foo: 'bar', baz: 42 }
