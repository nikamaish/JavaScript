let arr = [45, 46, 47];
// console.log(arr)

/////////////////////////// array map method  ////////////////////
/////// map creates new array and we use for each for taking action on particular element of array

let a = arr.map((value, key, array) => {
  // console.log(value, key, array);
  return value + 10;
});
console.log(a);

/////////////////////////// array filter method ////////////////////////
////// filter an array with values  that passes a test, creates a new array

let arr2 = [100, 90, 80, 70];
let a2 = arr2.filter((a) => {
  return a > 80;
});
console.log("Greater than 80 is ");
console.log(a2);

/////////////////////////// array reduce method //////////////////////////
//The reduce() method reduces an array of values down to just one value.

let arr3 = [1, 2, 3, 4, 5, 6];
let a3 = arr3.reduce((h1, h2) => {
  return h1 * h2;
});
console.log("values reduced to single value ");
console.log(a3);
