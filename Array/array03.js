//Normal function
// function isEven(element) {
//   if (element % 2 === 0) {
//     return true;
//   }
//   return false;
// }
// console.log(isEven(12));

//Arrow function
// var isEven = (element) => {
//   return element % 2 === 0;
// };
// // console.log(isEven(12));

//Callback function
// var result = [2, 4, 6, 8].every(isEven);
// console.log(result);

//Callback function with arrow function
// var result = [2, 4, 6, 8].every((e) => {
//   return e % 2 === 0;
// });
// console.log(result);

//Callback function as a condition
var result = [2, 4, 7, 8].every((e) => e % 2 === 0);
console.log(result);
