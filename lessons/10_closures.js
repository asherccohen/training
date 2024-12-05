// What are closures?

// Simply put they are functions that declare some state and return it in a function

const myFunction = (variable) => {
  let name = 'asher';

  const setState = () => name + 1;

  return function () {
    const state = name + variable;

    return [state, setState];
  };
};

myFunction()()()();

// Can also be written as:
var myFunction5 = () => () => 'something'; // currying

// This is REAL privacy because privateCounter is kept on the HEAP memory:
const counter = function () {
  var privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },
    value: function () {
      return privateCounter;
    },
  };
};

var list = [1, 2, 3, 4];

list.sort();

document.querySelector('div').forEach();
