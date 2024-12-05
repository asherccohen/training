/* We came up with this piece of code, but for some reasons it’s printing n times “undefined”.
Can you tell why and how you would write the code instead ? */

// Closures
/* The var keyword is function-scoped, meaning it lies within an enclosing function.
In this example, the enclosing scope is global and the for loop creates a global i variable.

Since var is function-scoped, i will be set to the closest enclosing function.
In this example, that would be the global scope.
The for loop executes first, then it looks for the i value, which is 5, 
and then outputs five times, one for each loop iteration. 
As messages[5] doesn't exist, it returns undefined.

The setTimeout function can access the value of i because of the closure. 
We ask for i within our console.log statement, but its value is set in an outer, enclosing scope, 
that of the for loop. Inner functions have access to variables in an outer function, so
we are able to go up a level and retrieve the value of i, which is 5.*/

const printValues = callback => {
  var messages = [1, 2, 3, 4, 5];

  for (var i = 0; i < messages.length; i++) {
    setTimeout(() => {
      console.log('closure original is:', messages[i]);
      callback && callback(messages[i]);
    }, 1000 * i);
  }
};
// SOLUTION1
// setTimeout inside for loop with IIFE Wrapper
/* One solution to the above seen issue is to create a new scope for each setTimeout execution.
You can use IIFE to create a new scope for each setTimeout callback without polluting the global scope.
Simply wrap up the setTimeout code inside a IIFE.  */

const printValuesIIFE = callback => {
  var messages = [1, 2, 3, 4, 5];
  for (var i = 0; i < messages.length; i++) {
    (function(i) {
      setTimeout(function() {
        console.log('closure with IIFE is:', messages[i]);
        callback && callback(messages[i]);
      }, 1000 * i);
    })(i);
  }
};

// SOLUTION2
// Using let keyword
/* Another way to solve the problem is using the ES6 let keyword inside the for loop.
The let keyword creates a separate scope for each iteration making it possible to print the consecutive variable value. */

const printValuesWithLet = callback => {
  var messages = [1, 2, 3, 4, 5];
  for (let i = 0; i < messages.length; i++) {
    setTimeout(function() {
      console.log('closure with let is:', messages[i]);
      callback && callback(messages[i]);
    }, 1000 * i);
  }
};

module.exports = { printValues, printValuesIIFE, printValuesWithLet };
