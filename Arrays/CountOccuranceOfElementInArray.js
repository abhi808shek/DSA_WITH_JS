const array = [1, 3, 4, 56, 33, 3, 56];
const key = 56;

// In Normal Way
// const CountOfOccuranceOfElementInAnArray = (array, key) => {
//   let count = 0;
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] === key) {
//       count++;
//     }
//   }
//   return count;
// };

// const totalCount = CountOfOccuranceOfElementInAnArray(array, key);
// console.log("totalCount", totalCount);

// Inbuilt Function

// No Inbuilt But Optimized Solution
const totalCount = array.reduce((count, element) => {
  if (element === key) {
    count++;
  }
  return count;
}, 0);

console.log("totalCount", totalCount);