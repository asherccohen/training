// How do we fix this?

for (var index = 1; index <= 3; index++) {
  setTimeout(function () {
    console.log(`after ${index} second(s): ${index}`);
  }, index * 1000);
}

// for (let index = 1; index <= 3; index++) {
//   setTimeout(function () {
//     console.log(`after ${index} second(s): ${index}`);
//   }, index * 1000);
// }
