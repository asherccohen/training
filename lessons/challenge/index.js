const {
  printValues,
  printValuesIIFE,
  printValuesWithLet
} = require('./closure');

const { XMLHttpRequest, https, request } = require('./api');
const majorityElement = require('./majorityElement');

// XMLHttpRequest can be tested in a browser
/* XMLHttpRequest().then(function(body) {
  console.log('using XMLHttpRequest:', body.title);
}); */
https().then(res => {
  console.log('using https title is:', res);
});

request().then(res => {
  console.log('using request title is:', res);
});

printValues();
printValuesIIFE();
printValuesWithLet();

const numbers = [12, 12, 12, 12, 53];
console.log(`majorityElement in [${numbers}] is: ${majorityElement(numbers)}`);
