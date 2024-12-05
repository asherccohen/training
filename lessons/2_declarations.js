// How do we declare and assign variables/functions/classes?

// = is assignment

var string1 = 'hey';
var number1 = 0;
var emptyArray = [];
var emptyObject = {};
var undefinedVariable; // undefined
var undefinedVariable2 = undefined; // undefined
var nullObject = null;

// var string = {prototype: {method:'all of our methods', isEqual: ()=> {}}}
// var myString = string1.toLocaleLowerCase()

var array = ['hey', 'ho'];
var array1 = [9, 9, 9, 0]; // array of primitives
var array2 = [{ name: 'hey', container: [] }, {}, {}]; // nested array
var array3 = ['hey', {}, []];
var array4 = ['hey', 'ho'];

function myFunction() {} // named function

var myFunction = function () {}; //function expression // anonymous
var myFunction2 = function NameOfaFunction() {}; //function expression // named

var myFunction4 = (params) => 'something'; //lambda/fat arrow/arrow function

(function () {
  // immediately invoked function executions (IIFE)
  var x = 'Hello!!'; // I will invoke myself
})();

try {
  // logic
} catch (error) {
  console.log(error);
}

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.array = ['hey', 'oh'];
  }

  makeArea = () => {
    const myNewArray = [];
    // this.array = []; // mutation

    return myNewArray;
  };
}

var myClass = new Rectangle(height, width);
var myClass2 = new Rectangle(height, width); // different instance
// var myCLass2 extends myClass // uses prototypal inheritance
